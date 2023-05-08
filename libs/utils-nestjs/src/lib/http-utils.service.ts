import { HttpUtils } from '@todo-nx/utils';
import { Injectable } from "@nestjs/common";

@Injectable()
export class ApiHttpUtils extends HttpUtils {
  env: typeof process.env;

  constructor() {
    super();
    this.env = process.env;
  }

  postEmailApi(path: string, body: any, authToken?: string) {
    console.log(`${this.env['EMAIL_API_URL']!}/${path}`);
    return this.post(
      `${this.env['EMAIL_API_URL']!}/${path}`,
      body,
      authToken && { Authorization: 'Bearer ' + authToken }
    );
  }
}
