export {};

declare global {
  namespace NodeJS {
    export interface ProcessEnv {
      HOST: string;
      PORT: string;
      APP_KEYS: string;
      API_TOKEN_SALT: string;
      ADMIN_JWT_SECRET: string;
      JWT_SECRET: string;
    }
  }
}
