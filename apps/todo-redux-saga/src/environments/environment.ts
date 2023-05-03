// This file can be replaced during build by using the `fileReplacements` array.
// When building for production, this file is replaced with `environment.prod.ts`.

import { IUIEnvironment } from '@todo-nx/interfaces';

export const environment: IUIEnvironment = {
  production: false,
  apiUrl: 'http://localhost:3000/api',
  ssoApiUrl: 'http://localhost:3030/api',
  ssoUiUrl: 'http://localhost:42069',
  appUrl: 'http://localhost:4200',
  accessTokenKey: 'accessToken'
};
