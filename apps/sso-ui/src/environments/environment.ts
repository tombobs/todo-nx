import { IUIEnvironment } from '@todo-nx/interfaces';

export const environment: IUIEnvironment = {
  production: false,
  ssoApiUrl: 'http://localhost:3030/api',
  appUrl: 'http://localhost:4200',
  accessTokenKey: 'accessToken',
  ssoUiUrl: 'http://localhost:42069',
  avatarPath: 'https://profile-photos.eu-central-1.linodeobjects.com/'
};
