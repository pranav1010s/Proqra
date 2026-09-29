/**
 * PROQRA Type Definitions
 * Shared types for client inquiries, supplier onboarding applications, and email notifications.
 */

export interface ClientInquiry {
  name: string
  email: string
  company?: string
  phone?: string
  manufacturingRequirement: string
  source?: string
  drawingFileName?: string
  drawingFileSize?: string
  submittedAt?: Date
}

export interface SupplierSubmission {
  companyName: string
  locationCity: string
  locationState: string
  contactPerson: string
  email: string
  phone: string
  primaryCapabilities: string[]
  keyMachinesSummary?: string
  certifications?: string[]
  brochureFileName?: string
  brochureFileSize?: string
  notes?: string
  submittedAt?: Date
}

export interface EmailAttachment {
  filename: string
  content: Buffer
}

export interface SendEmailParams {
  from?: string
  replyTo?: string
  subject: string
  html: string
  attachments?: EmailAttachment[]
}

export interface SendEmailResult {
  success: boolean
  id?: string
  error?: string
  routedViaBackup?: boolean
  devMode?: boolean
}
