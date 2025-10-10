import { useState, useEffect, createContext, useContext } from "react";
import { getMe } from "../services/authService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const u = await getMe();
                setUser(u);
            } catch (error) {
                console.error(
                    "AuthContext getMe failed:",
                    error.response?.data?.message || error.message
                );
                setUser(null);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    const handleLogout = async () => {
        try {
            await logout();
            setUser(null);
        } catch (error) {
            console.error(
                "Logout failed:",
                error.response?.data?.message || error.message
            );
        }
    };

    return (
        <AuthContext.Provider value={{ user, loading, handleLogout, setUser }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth must be used within AuthProvider");
    }

    return context;
};
