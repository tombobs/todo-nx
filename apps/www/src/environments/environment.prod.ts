import { baseEnvironment, IUIEnvironment } from "@todo-nx/interfaces";

export const environment: IUIEnvironment = {
  ...baseEnvironment,
  production: false,
  assetsUrl: 'https://assets.tom-roberts.dev',

  todoReduxSagaAppUrl: 'https://todo-redux-saga.tom-roberts.dev',
  todoApiUrl: 'https://api.tom-roberts.dev/todo',

  ssoApiUrl: 'https://api.tom-roberts.dev/sso',
  ssoUiUrl: 'https://sso.tom-roberts.dev',

  emailApiUrl: 'https://api.tom-roberts.dev/email'
};
