import useAuth from "@/hooks/useAuth";
import { Navigate } from "react-router-dom";


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