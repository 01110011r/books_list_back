export default () => ({
  port:parseInt(process.env.SERVER_PORT, 10) || 3004,
  jwt:{
    secret: String(process.env.JWT_SECRET_KEY),
  },
  db:{
    remote_db_url: process.env.REMOTE_DB_URL,
    local_db_url: process.env.LOCAL_DB_URL
  }
});
