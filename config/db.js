module.exports = {
  "dev": {
    name: "rabbid_rabbits",
    user: "postgres",
    pass: "example",
    host: "127.0.0.1",
    port: "5432"
  },
  "production": {
    name: process.env.DB_NAME,
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 5432
  }
}
