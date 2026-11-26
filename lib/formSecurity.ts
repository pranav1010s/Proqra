export const MAX_FILE_SIZE_BYTES = 4 * 1024 * 1024

export const ALLOWED_EXTENSIONS = [
  '.pdf',
  '.png',
  '.jpg',
  '.jpeg',
  '.doc',
  '.docx',
  '.xls',
  '.xlsx',
  '.csv',
  '.step',
  '.stp',
  '.dxf',
] as const

const EXTENSION_MIME_ALLOWLIST: Record<string, Set<string>> = {
  '.pdf': new Set(['application/pdf']),
  '.png': new Set(['image/png']),
  '.jpg': new Set(['image/jpeg']),
  '.jpeg': new Set(['image/jpeg']),
  '.doc': new Set(['application/msword']),
  '.docx': new Set(['application/vnd.openxmlformats-officedocument.wordprocessingml.document']),
  '.xls': new Set(['application/vnd.ms-excel']),
  '.xlsx': new Set(['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet']),
  '.csv': new Set(['text/csv', 'application/csv', 'application/vnd.ms-excel', 'text/plain']),
  '.step': new Set(['application/step', 'model/step', 'text/plain']),
  '.stp': new Set(['application/step', 'model/step', 'text/plain']),
  '.dxf': new Set(['image/vnd.dxf', 'application/dxf', 'application/acad', 'application/x-autocad', 'text/plain']),
}

const GENERIC_BINARY_MIMES = new Set(['', 'application/octet-stream'])

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export function stripCrlf(value: string): string {
  return value.replace(/[\r\n]+/g, ' ').trim()
}

export function isValidEmail(value: string): boolean {
  if (!value || value.length > 254 || /[\r\n]/.test(value)) {
    return false
  }
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)
}

export function parseSafeHttpUrl(value: string): string | null {
  try {
    const parsed = new URL(value)
    if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
      return null
    }
    return parsed.toString()
  } catch {
    return null
  }
}

export function sanitizeFilename(rawName: string): string {
  const base = rawName.split(/[\\/]/).pop() || 'attachment'
  const cleaned = base
    .replace(/[\x00-\x1f\x7f]/g, '')
    .replace(/[^a-zA-Z0-9._ -]/g, '_')
    .trim()
    .slice(0, 120)
  return cleaned || 'attachment'
}

export function getFormString(formData: FormData, key: string): string {
  const val = formData.get(key)
  return typeof val === 'string' ? val.trim() : ''
}

export function getJsonString(value: unknown): string {
  return typeof value === 'string' ? value.trim() : ''
}

export function validateStringLength(value: string, max: number, label: string): string | null {
  if (value.length > max) {
    return `${label} must be ${max} characters or fewer.`
  }
  return null
}

export function validateStringArray(
  raw: unknown,
  label: string,
  maxItems = 20,
  maxItemLength = 100
): { ok: true; values: string[] } | { ok: false; error: string } {
  if (!Array.isArray(raw)) {
    return { ok: false, error: `${label} must be a list of text values.` }
  }
  if (raw.length > maxItems) {
    return { ok: false, error: `${label} cannot contain more than ${maxItems} items.` }
  }
  const values: string[] = []
  for (const item of raw) {
    if (typeof item !== 'string') {
      return { ok: false, error: `${label} must contain text values only.` }
    }
    const trimmed = item.trim()
    if (!trimmed) continue
    if (trimmed.length > maxItemLength) {
      return { ok: false, error: `Each item in ${label} must be ${maxItemLength} characters or fewer.` }
    }
    values.push(trimmed)
  }
  return { ok: true, values }
}

function hasExpectedMagicBytes(ext: string, buf: Buffer): boolean {
  if (ext === '.pdf') {
    return buf.length >= 5 && buf.subarray(0, 5).toString('ascii') === '%PDF-'
  }
  if (ext === '.png') {
    return (
      buf.length >= 8 &&
      buf[0] === 0x89 &&
      buf[1] === 0x50 &&
      buf[2] === 0x4e &&
      buf[3] === 0x47
    )
  }
  if (ext === '.jpg' || ext === '.jpeg') {
    return buf.length >= 3 && buf[0] === 0xff && buf[1] === 0xd8 && buf[2] === 0xff
  }
  return true
}

export type ValidatedFileResult =
  | { ok: true; file: null }
  | { ok: true; file: { filename: string; sizeLabel: string; content: Buffer } }
  | { ok: false; status: 400 | 413 | 415; error: string }

export async function validateUploadedFile(
  entry: FormDataEntryValue | null
): Promise<ValidatedFileResult> {
  if (entry === null) {
    return { ok: true, file: null }
  }
  if (!(entry instanceof File)) {
    return { ok: false, status: 400, error: 'Invalid file upload.' }
  }
  if (entry.size === 0) {
    return { ok: true, file: null }
  }
  if (entry.size > MAX_FILE_SIZE_BYTES) {
    return {
      ok: false,
      status: 413,
      error: 'File exceeds the 4MB limit. Please upload a smaller file or send it via email.',
    }
  }

  const safeName = sanitizeFilename(entry.name)
  const dotIdx = safeName.lastIndexOf('.')
  const ext = dotIdx > 0 ? safeName.slice(dotIdx).toLowerCase() : ''
  const allowedMimes = EXTENSION_MIME_ALLOWLIST[ext]

  if (!allowedMimes) {
    return {
      ok: false,
      status: 415,
      error: 'Unsupported file type. Allowed formats: PDF, PNG, JPG, Word, Excel, CSV, STEP, and DXF.',
    }
  }

  const normalizedMime = (entry.type || '').split(';')[0].trim().toLowerCase()
  if (!GENERIC_BINARY_MIMES.has(normalizedMime) && !allowedMimes.has(normalizedMime)) {
    return {
      ok: false,
      status: 415,
      error: 'File MIME type does not match an allowed format.',
    }
  }

  const content = Buffer.from(await entry.arrayBuffer())
  if (!hasExpectedMagicBytes(ext, content)) {
    return {
      ok: false,
      status: 415,
      error: 'File contents do not match the declared file format.',
    }
  }

  return {
    ok: true,
    file: {
      filename: safeName,
      sizeLabel: `${(entry.size / (1024 * 1024)).toFixed(2)} MB`,
      content,
    },
  }
}
