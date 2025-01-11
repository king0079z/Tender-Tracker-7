export const isDevelopment = import.meta.env.DEV;

export const dbConfig = {
  host: import.meta.env.VITE_AZURE_DB_HOST,
  database: import.meta.env.VITE_AZURE_DB_NAME,
  user: import.meta.env.VITE_AZURE_DB_USER,
  password: import.meta.env.VITE_AZURE_DB_PASSWORD,
  port: 5432,
  ssl: true
};