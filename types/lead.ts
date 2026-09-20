export interface FabricationLead {
  fullName: string
  companyName: string
  email: string
  phone?: string
  partDescription: string
  quantity: string
  materialFinish?: string
  targetLeadTime?: string
  drawingFileName?: string
  drawingFileSize?: string
  notes?: string
  submittedAt?: Date
}
