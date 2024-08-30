import { Navigate } from 'react-router-dom';
import { FC, PropsWithChildren } from "react";


interface AuthRouteProps {
    roles: string[];
}

export const FAKE_USER = {
    userName: 'test',
    email: 'test@gmail.com',
    phone: 9231263831,
    address: '133/32 abc, xyz',
    role: 'admin'
}

const AuthRoute: FC<PropsWithChildren<AuthRouteProps>> = ({ children, roles }) => {
    if (!FAKE_USER || !roles.includes(FAKE_USER.role)) {
        return <Navigate to="/unauthorized" replace />;
    }
    return children
};

export default AuthRoute