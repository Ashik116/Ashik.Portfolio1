
// Fixed: Use namespace augmentation for NodeJS.ProcessEnv to provide types for process.env.API_KEY.
// This avoids "Cannot redeclare block-scoped variable 'process'" errors which occur when Node.js type definitions are already present in the environment.
declare namespace NodeJS {
  interface ProcessEnv {
    API_KEY: string;
    [key: string]: string | undefined;
  }
}
