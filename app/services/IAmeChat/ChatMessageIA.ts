import type { ChatMessageRequest, ChatMessageResponse } from '~/types/ChatMessage';
import { apiClient } from '~/services/api/client';
import { ENDPOINTS } from '~/services/api/endpoints';

export const ChatMessageIA = {
  SendMessage: async (data: ChatMessageRequest, retry: number = 3, delay: number = 1000, timeout: number = 30000) => {
    for (let i = 0; i < retry; i++) {
      try {
        return await apiClient.post<ChatMessageResponse, ChatMessageRequest>(ENDPOINTS.SEND_MESSAGE, data, timeout);
      } catch (error) {
        if (i < retry - 1) {
          await new Promise((resolve) => setTimeout(resolve, delay * (i + 1)));
        } else {
          throw error;
        }
      }
    }
  },
};