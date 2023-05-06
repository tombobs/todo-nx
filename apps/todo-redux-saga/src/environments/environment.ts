import { baseEnvironment, IUIEnvironment } from "@todo-nx/interfaces";

export const environment: IUIEnvironment = {
  ...baseEnvironment,
  production: false,

  todoReduxSagaAppUrl: 'http://localhost:4200',
  todoApiUrl: 'http://localhost:3000/api',

  ssoApiUrl: 'http://localhost:3030/api',
  ssoUiUrl: 'http://localhost:42069',
};
