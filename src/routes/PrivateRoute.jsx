/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../components/Loading/Loading';

const PrivateRoute = ({children}) => {
    const {user,loader} = useContext(AuthContext);
    const location = useLocation();

    if(loader){
        return <Loading></Loading>
    }
    if(user){
        return children
    }
    return <Navigate to="/login" state={{from:location}} replace></Navigate>
};

export default PrivateRoute;