import axios, { AxiosError } from 'axios';

export interface ErrorResponse {
  statusCode: number;
  message: string;
  error: string;
}

/**
 * @baseUrl: 서버주소
 */
export const axiosInstance = axios.create({
  baseURL: 'https://api.example.com'
});

export const handleAxiosError = (error: AxiosError) => {};
