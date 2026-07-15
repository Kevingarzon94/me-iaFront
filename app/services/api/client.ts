import { apiConfig } from '~/services/api/config';


const makeRequest = async <TResponse>(url: string, options: RequestInit, customTimeout?: number): Promise<TResponse | undefined> => {
  try {
    const response = await fetch(apiConfig.baseUrl + url, {
      ...options,
      headers: apiConfig.defaultHeaders,
      signal: AbortSignal.timeout(customTimeout || apiConfig.timeout),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(`HTTP ${response.status}: ${errorBody || response.statusText}`);
    }

    const contentLength = response.headers.get('content-length');
    return contentLength !== '0' && contentLength !== null
      ? await response.json()
      : undefined;

  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') {
      throw new Error('Request timed out');
    }
    throw error;
  }
};

export const apiClient = {
  post: <TResponse, TRequest>(url: string, body: TRequest, customTimeout?: number) => makeRequest<TResponse>(url, {
    method: 'POST',
    body: JSON.stringify(body),
  }, customTimeout),
};