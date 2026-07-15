const baseUrl:string =  import.meta.env.VITE_API_BASE_URL || '';
const timeout: number =  Number(import.meta.env.VITE_API_TIMEOUT) || 5000;

const defaultHeaders = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
};

const retryConfig = {
    retries: 3,
    retryDelay: 1000
};

export const apiConfig = {
    baseUrl,
    timeout,
    defaultHeaders,
    retryConfig
};