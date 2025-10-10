import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { register, resendVerificationCode } from "../../services/authService";

const Register = () => {
    const { setUser } = useAuth();
    const [form, setForm] = useState({
        accountType: "user",
        firstName: "",
        surname: "",
        companyName: "",
        email: "",
        password: "",
        passwordConfirm: "",
        privacyAgreement: false,
    });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const getRedirectPath = (role) => {
        const rolePaths = {
            company: "/verify-email",
            user: "/verify-email",
        };
        return rolePaths[role] || "/verify-email";
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm({ ...form, [name]: type === "checkbox" ? checked : value });
        setError("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setSuccess(false);

        if (form.password !== form.passwordConfirm) {
            setError("Passwords do not match.");
            setLoading(false);
            return;
        }
        if (!form.privacyAgreement) {
            setError("You must agree to the privacy disclaimer to continue.");
            setLoading(false);
            return;
        }
        if (
            form.accountType !== "company" &&
            (!form.firstName || !form.surname)
        ) {
            setError("First name and surname are required.");
            setLoading(false);
            return;
        }
        if (form.accountType === "company" && !form.companyName) {
            setError("Company name is required.");
            setLoading(false);
            return;
        }
        if (!form.email) {
            setError("Email is required.");
            setLoading(false);
            return;
        }

        try {
            const registerData = {
                email: form.email,
                password: form.password,
                role: form.accountType,
                privacyAgreement: form.privacyAgreement,
            };
            if (form.accountType === "company") {
                registerData.companyName = form.companyName;
            } else {
                registerData.firstName = form.firstName;
                registerData.surname = form.surname;
            }

            await register(registerData);
            await resendVerificationCode(form.email);
            setSuccess(true);
            setTimeout(
                () =>
                    navigate(
                        `/verify-email?email=${encodeURIComponent(form.email)}`
                    ),
                2000
            );
        } catch (registerError) {
            setError(
                registerError.response?.data?.message || "Registration failed."
            );
            setLoading(false);
        }
    };
};

export default Register;
