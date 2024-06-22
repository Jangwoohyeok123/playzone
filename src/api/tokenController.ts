import Cookies from 'js-cookie';

class TokenController {
  private static ACCESS_TOKEN_KEY = 
  process.env.REACT_APP_NODE_ENV === 'production'
  ? 'access_token'
  : 'dev_access_token';
}
