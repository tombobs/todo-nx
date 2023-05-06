import { baseEnvironment, IUIEnvironment } from '@todo-nx/interfaces';

export const environment: IUIEnvironment = {
  ...baseEnvironment,
  production: true,

  ssoUiUrl: 'https://sso.tom-roberts.dev',
  ssoApiUrl: 'https://sso-api.tom-roberts.dev/sso-api',

  todoReduxSagaAppUrl: 'https://todo-redux-saga.tom-roberts.dev',
};
