import Cookies from 'js-cookie';

class TokenController {
  private static ACCESS_TOKEN_KEY =
    process.env.REACT_APP_NODE_ENV === 'production'
      ? 'access_token'
      : 'dev_access_token';
  private static REFRESH_TOKEN_KEY = 'refresh_token';
  private static TOKEN_TIME_KEY = 'token_time';

  static get accessToken() {
    return Cookies.get(this.ACCESS_TOKEN_KEY);
  }

  static get refreshToken() {
    return Cookies.get(this.REFRESH_TOKEN_KEY);
  }

  static get tokenTime() {
    return Cookies.get(this.TOKEN_TIME_KEY);
  }

  static setAccessToken(accessToken: string, expires?: number) {
    Cookies.set(this.ACCESS_TOKEN_KEY, accessToken, {
      domain: process.env.REACT_APP_NODE_ENV !== 'local' ? '.domain.kr' : '',
      expires: expires ?? 7
    });
  }

  static setRefreshToken(refreshToken: string, expires?: number) {
    Cookies.set(this.REFRESH_TOKEN_KEY, refreshToken, {
      domain: process.env.REACT_APP_NODE_ENV !== 'local' ? '.domain.kr' : '',
      expires: expires ?? 7
    });
  }

  static clear() {
    Cookies.remove(this.ACCESS_TOKEN_KEY, {
      domain: process.env.REACT_APP_NODE_ENV !== 'local' ? '.domain.kr' : ''
    });
    Cookies.remove(this.REFRESH_TOKEN_KEY, {
      domain: process.env.REACT_APP_NODE_ENV !== 'local' ? '.domain.kr' : ''
    });
    Cookies.remove(this.TOKEN_TIME_KEY, {
      domain: process.env.REACT_APP_NODE_ENV !== 'local' ? '.domain.kr' : ''
    });
  }
}
