module.exports = {
    env: process.env.NODE_ENV,
    port: process.env.PORT || 3000,
    dbName: process.env.DB_NAME || "fastc_dev",
    mongoUri: process.env.MONGO_URI,
    jwtSecret: process.env.JWT_SECRET,
    jwtExpiresIn: process.env.JWT_EXPIRES_IN || "1d",
    frontendUrl: process.env.FRONTEND_URL,
    brevoApiKey: process.env.BREVO_API_KEY,
    emailFrom: process.env.EMAIL_FROM || "2022311732@pampangastateu.edu.ph",
};
