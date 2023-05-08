import { IEmailReceipt, IUIEnvironment } from "@todo-nx/interfaces";
import { HttpUtils } from "@todo-nx/utils";

export class UiHttpUtils extends HttpUtils {
  private readonly environment: any;

  constructor(environment: IUIEnvironment) {
    super();
    this.environment = environment;
  }

  /* SSO API */
  async ssoGet<T = any>(url: string, params?: any): Promise<T> {
    return this.get(`${this.environment.ssoApiUrl}/${url}`, params, this.headers);
  }

  async ssoPost<T = any, D = any>(url: string, data: D): Promise<T> {
    return this.post(`${this.environment.ssoApiUrl}/${url}`, data, this.headers);
  }

  async ssoPut<T = any, D = any>(url: string, data: D): Promise<T> {
    return this.put(`${this.environment.ssoApiUrl}/${url}`, data, this.headers);
  }

  async ssoDelete<T = any>(url: string, data?: any): Promise<T> {
    return this.delete(`${this.environment.ssoApiUrl}/${url}`, data, this.headers);
  }

  /* TODO API */
  async apiGet<T = any>(url: string, params?: any): Promise<T> {
    return this.get(`${this.environment.todoApiUrl}/${url}`, params, this.headers);
  }

  async apiPost<T = any, D = any>(url: string, data: D): Promise<T> {
    return this.post(`${this.environment.todoApiUrl}/${url}`, data, this.headers);
  }

  async apiPut<T = any, D = any>(url: string, data: D): Promise<T> {
    return this.put(`${this.environment.todoApiUrl}/${url}`, data, this.headers);
  }

  async apiDelete<T = any>(url: string, data?: any): Promise<T> {
    return this.delete(`${this.environment.todoApiUrl}/${url}`, data, this.headers);
  }

  /* EMAIL */
  async postEmail(url: string, data: any): Promise<IEmailReceipt> {
    return this.post(`${this.environment.emailApiUrl}/${url}`, data, this.headers);
  }

  /* UTILS */
  private get authHeader(): string {
    return `Bearer ${localStorage.getItem(this.environment.accessTokenKey)}`;
  }

  private get headers() {
    return { Authorization: this.authHeader };
  }
}
