export interface IBatsConfig {
  port: number;
  environment: string;

  database: {
    uri: string;
  };
}
