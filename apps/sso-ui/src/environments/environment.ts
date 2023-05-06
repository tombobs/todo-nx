import { baseEnvironment, IUIEnvironment } from "@todo-nx/interfaces";

export const environment: IUIEnvironment = {
  ...baseEnvironment,
  production: false,

  ssoUiUrl: 'http://localhost:42069',
  ssoApiUrl: 'http://localhost:3030/api',

  todoReduxSagaAppUrl: 'http://localhost:4200',
};
