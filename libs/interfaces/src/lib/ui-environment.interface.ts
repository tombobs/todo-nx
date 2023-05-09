export interface IUIEnvironment {
  production: boolean;
  ssoApiUrl: string;
  todoReduxSagaAppUrl: string;
  todoApiUrl?: string;
  accessTokenKey: string;
  ssoUiUrl: string;
  avatarPath: string;
  assetsUrl?: string;
  emailApiUrl?: string;
  wwwUrl?: string;
  aiApiUrl?: string;
}

export const baseEnvironment: IUIEnvironment = {
  avatarPath: 'https://profile-photos.eu-central-1.linodeobjects.com/',
  accessTokenKey: 'accessToken',
  wwwUrl: 'https://www.tom-roberts.dev'
} as IUIEnvironment;
