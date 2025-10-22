import React from 'react';
import { NavLink } from 'react-router';

const MyLink = ({to, className, children}) => {
    return (
        <NavLink
        to={to}
        className={({isActive}) => (
            isActive ? 'text-green-500 underline text-lg' : `${className}  text-lg font-bold`
    )}
        >
        {children}    
        </NavLink>
    );
};

export default MyLink;