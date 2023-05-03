import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { IJWT, IUIEnvironment } from '@todo-nx/interfaces';
import jwtDecode from 'jwt-decode';
import { DateTime } from 'luxon';

export enum AuthState {
  Loading,
  Valid,
  Invalid
}

export function useAuth(environment: IUIEnvironment) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [authState, setAuthState] = useState<AuthState>(AuthState.Loading);

  useEffect(() => {
    let token = searchParams.get(environment.accessTokenKey);
    if (token) {
      localStorage.setItem(environment.accessTokenKey, token);
      setSearchParams({});
    } else {
      token = localStorage.getItem(environment.accessTokenKey);
    }

    setAuthState(checkToken(token!) ? AuthState.Valid : AuthState.Invalid)
  }, []);

  function redirectToLogin(): void {
    location.href = environment.ssoUiUrl;
  }

  return {authState, redirectToLogin};
}


function checkToken(token: string): boolean {
  try {
    const expiryTime: number = jwtDecode<IJWT>(token!).exp;
    const now: number = DateTime.now().toUnixInteger();
    return now < expiryTime;
  } catch {
    return false;
  }
}
