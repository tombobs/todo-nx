import { IUIEnvironment } from '@todo-nx/interfaces';
import axios from 'axios';

export class HttpUtils {
  private readonly environment: IUIEnvironment;

  constructor(environment: IUIEnvironment) {
    this.environment = environment;
  }

  /* API */
  async apiGet<T = any>(url: string, params?: any): Promise<T> {
    return this.get(`${this.environment.apiUrl}/${url}`, params);
  }

  async apiPost<T = any, D = any>(url: string, data: D): Promise<T> {
    return this.post(`${this.environment.apiUrl}/${url}`, data);
  }

  async apiPut<T = any, D = any>(url: string, data: D): Promise<T> {
    return this.put(`${this.environment.apiUrl}/${url}`, data);
  }

  async apiDelete<T = any>(url: string, data?: any): Promise<T> {
    return this.delete(`${this.environment.apiUrl}/${url}`, data);
  }

  /* SSO */
  async ssoGet<T = any>(url: string, params?: any): Promise<T> {
    return this.get(`${this.environment.ssoApiUrl}/${url}`, params);
  }

  async ssoPost<T = any, D = any>(url: string, data: D): Promise<T> {
    return this.post(`${this.environment.ssoApiUrl}/${url}`, data);
  }

  async ssoPut<T = any, D = any>(url: string, data: D): Promise<T> {
    return this.put(`${this.environment.ssoApiUrl}/${url}`, data);
  }

  async ssoDelete<T = any>(url: string, data?: any): Promise<T> {
    return this.delete(`${this.environment.ssoApiUrl}/${url}`, data);
  }

  /* BASE */
  async get<T = any>(url: string, params?: any): Promise<T> {
    const res = await axios.get<T>(url, { headers: this.headers, params });
    return res.data;
  }

  async post<T = any, D = any>(url: string, data: D): Promise<T> {
    const res = await axios.post(url, data, { headers: this.headers });
    return res.data;
  }

  async put<T = any, D = any>(url: string, data: D): Promise<T> {
    const res = await axios.put(url, data, { headers: this.headers });
    return res.data;
  }

  async delete<T = any>(url: string, data?: any): Promise<T> {
    const res = await axios.delete<T>(url, { headers: this.headers, data });
    return res.data;
  }


  private get authHeader(): string {
    return `Bearer ${localStorage.getItem(this.environment.accessTokenKey)}`;
  }

  private get headers() {
    return { Authorization: this.authHeader };
  }
}
