/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    REACT_APP_API_SERVER_URL: string;
    REACT_APP_CHAT_SERVER_URL: string;
    REACT_APP_KAKAO_COORD2ADDRESS_API_URL: string;
    REACT_APP_KAKAO_ADDRESS2COORD_API_URL: string;
    REACT_APP_KAKAO_JAVASCRIPT_KEY: string;
    REACT_APP_KAKAO_REST_API_KEY: string;
  }
}

declare module '*.jpg';
declare module '*.png';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.svg' {
  import React = require('react');

  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
