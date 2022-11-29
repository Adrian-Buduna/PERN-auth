import {
    Navigate,
    Outlet,
} from "react-router-dom";


export const PriveteRoute = () => {
    const isAuth = false;
    return <>{isAuth ? <Outlet /> : <Navigate to="/login" />}</>;
};
export const RestrictedRoute = () => {
    const isAuth = false;
    return <>{!isAuth ? <Outlet /> : <Navigate to="/dashboard" />}</>;
};
