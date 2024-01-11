export interface IBatsConfig {
  port: number;
  environment: string;

  database: {
    uri: string;
  };
  email: {
    host: string;
    user: string;
    pass: string;
    port: string;
    from: string;
  };
}
