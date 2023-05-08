import axios from 'axios';

export class HttpUtils {

  async get<T = any>(url: string, params?: any, headers?: any): Promise<T> {
    const res = await axios.get<T>(url, { headers, params });
    return res.data;
  }

  async post<T = any, D = any>(url: string, data: D, headers?: any): Promise<T> {
    const res = await axios.post(url, data, { headers });
    return res.data;
  }

  async put<T = any, D = any>(url: string, data: D, headers?: any): Promise<T> {
    const res = await axios.put(url, data, { headers });
    return res.data;
  }

  async delete<T = any>(url: string, data?: any, headers?: any): Promise<T> {
    const res = await axios.delete<T>(url, { headers, data });
    return res.data;
  }
}
