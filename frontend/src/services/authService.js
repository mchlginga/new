import { api } from "./api";

export const register = async ({
    firstName,
    surname,
    companyName,
    email,
    password,
    privacyAgreement,
    role,
}) => {
    const { data } = await api.post("/auth/register", {
        firstName,
        surname,
        companyName,
        email,
        password,
        privacyAgreement,
        role,
    });
    return data.publicUser;
};

export const getMe = async () => {
    const { data } = await api.get("/auth/me");
    return data.user;
};

export const logout = async () => {
    await api.post("/auth/logout");
};

export const resendVerificationCode = async (email) => {
    try {
        const { data } = await api.post("/auth/send-verification-code", {
            email,
        });
        return data;
    } catch (error) {
        console.error(
            "Resend verification code error:",
            error.response?.data || error.message
        );
        throw error;
    }
};

export const verifyEmail = async (email, code) => {
    const { data } = await api.post("/auth/verify-code", { email, code });
    return data.publicUser;
};
