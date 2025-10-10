import { Navigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({
    children,
    allowedRoles,
    condition,
    redirectTo = "/login",
}) {
    const { user } = useAuth();

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    if (allowedRoles && !allowedRoles.includes(user.role)) {
        return <Navigate to="/unauthorized" replace />;
    }

    if (condition && !condition(user)) {
        return <Navigate to={redirectTo} replace />;
    }

    return children;
}
