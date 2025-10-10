const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/auth");
const {
    register,
    getMe,
    logout,
    sendVerificationCode,
    verifyCode,
} = require("../controllers/auth");

router.post("/register", register);
router.get("/me", protect, getMe);
router.post("/logout", logout);
router.post("/send-verification-code", sendVerificationCode);
router.post("/verify-code", verifyCode);

module.exports = router;
