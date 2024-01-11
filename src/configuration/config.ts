export default () => ({
  port: parseInt(process.env.PORT) || 8080,
  live: {
    database: {
      uri: process.env.MONGO_URI,
    },
    email: {
      host: process.env.MAIL_HOST,
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
      port: process.env.MAIL_PORT,
      from: process.env.MAIL_FROM,
    },
  },
});
