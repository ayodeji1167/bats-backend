export default () => ({
  port: parseInt(process.env.PORT) || 8080,
  live: {
    database: {
      uri: process.env.MONGO_URI,
    },
  },
});
