import React, { use } from 'react';
import { AuthContext } from './AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivetRoutes = ({children}) => {

    const {user,loading} = use(AuthContext);


    const location = useLocation()

    if(loading){
        return <h1>loading .....</h1>
    }


    if(user && user?.email){
        return children;
    }

    return (
        <div>
            <Navigate state={location.pathname} to={'/auth/login'} replace/>
        </div>
    );
};

export default PrivetRoutes;