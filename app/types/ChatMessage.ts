export interface ChatMessageRequest {
  message: string
}

export interface ChatMessageResponse {
  success: boolean
  results: string
  timestamp: string
}
