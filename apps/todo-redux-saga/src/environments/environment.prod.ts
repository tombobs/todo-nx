import { IUIEnvironment } from '@todo-nx/interfaces';

export const environment: IUIEnvironment = {
  production: true,
  apiUrl: 'https://todo-api.tom-roberts.dev/todo-api',
  ssoApiUrl: 'https://sso-api.tom-roberts.dev/sso-api',
  appUrl: 'https://todo-redux-saga.tom-roberts.dev',
  ssoUiUrl: 'https://sso.tom-roberts.dev',
  accessTokenKey: 'accessToken'
};
