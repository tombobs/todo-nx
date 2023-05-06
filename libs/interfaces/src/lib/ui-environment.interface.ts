export interface IUIEnvironment {
  production: boolean;
  ssoApiUrl: string;
  todoReduxSagaAppUrl: string;
  todoApiUrl?: string;
  accessTokenKey: string;
  ssoUiUrl: string;
  avatarPath: string;
}

export const baseEnvironment: IUIEnvironment = {
  avatarPath: 'https://profile-photos.eu-central-1.linodeobjects.com/',
  accessTokenKey: 'accessToken',
} as IUIEnvironment;
