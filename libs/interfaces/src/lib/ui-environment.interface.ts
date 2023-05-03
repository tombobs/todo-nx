export interface IUIEnvironment {
  production: boolean;
  ssoApiUrl: string;
  appUrl: string;
  apiUrl?: string;
  accessTokenKey: 'accessToken';
  ssoUiUrl: string;
}
