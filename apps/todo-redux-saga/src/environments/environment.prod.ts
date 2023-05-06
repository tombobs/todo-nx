import { baseEnvironment, IUIEnvironment } from "@todo-nx/interfaces";

export const environment: IUIEnvironment = {
  ...baseEnvironment,
  production: true,

  todoReduxSagaAppUrl: 'https://todo-redux-saga.tom-roberts.dev',
  todoApiUrl: 'https://todo-api.tom-roberts.dev/todo-api',

  ssoUiUrl: 'https://sso.tom-roberts.dev',
  ssoApiUrl: 'https://sso-api.tom-roberts.dev/sso-api'
};
