import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const ProtectedRoute = ({ children }) => {
    const { user } = useAuth();


    if (!user) {
        return <Navigate to='/logReg' state={location?.pathname || '/'}></Navigate>
    }

    return (
        <div>
            {children}
        </div>
    );
};

export default ProtectedRoute;