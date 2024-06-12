import useAuth from "@/hooks/useAuth";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Spinner from "../Spinner/Spinner";


const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [spinLoading, setSpinLoading] = useState(true);

    useEffect(() => {
        if (!spinLoading) {
            setSpinLoading(false)
        }
    }, [spinLoading])


    if (loading) {
        return <Spinner></Spinner>
    }


    if (!user) {
        return <Navigate to='/login' state={location?.pathname || '/'}></Navigate>
    }

    return (
        <div>
            {children}
        </div>
    );
};

export default ProtectedRoute;