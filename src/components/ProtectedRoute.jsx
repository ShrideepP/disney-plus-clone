import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from './context/UserContext';

function ProtectedRoute({ children }) {
    const { displayName, photoURL } = UserContext();
    return ( displayName && photoURL ) ? children : <Navigate to='/' />;
};

export default ProtectedRoute;