import React, { use } from 'react';
import plantLogo from '../assets/plantlogo.png';
import { FaUser } from 'react-icons/fa';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';
import { toast } from 'react-toastify';

const Navbar = () => {

    const { user, logOut } = use(AuthContext);


    const handleLogOut = () => {
        logOut().then((result) => {
            console.log(result.user);
            toast.success('you are successfully log out')
        })
            .catch((error) => {
                console.log(error);
            })
    }


    return (
        <div className="navbar  bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><NavLink to={'/'}>Home</NavLink></li>
                        <li><NavLink to={'/plants'}>Plants</NavLink></li>
                        <li><NavLink to={'/myprofile'}>My Profile</NavLink></li>

                    </ul>
                </div>
                <NavLink to={'/'} className="flex font-bold items-center text-xl"><img src={plantLogo} className='w-18' alt="" /> GreenNest</NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Item 1</a></li>
                    <li>
                        <details>
                            <summary>Parent</summary>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a>Item 3</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <img className='w-15' src={`${user ? user.photoURL : <FaUser />}`} alt="" />
                {
                    user ? (<button onClick={handleLogOut} to={'/auth/login'} className='btn btn-primary px-8' >logOut</button>) :
                        (<Link to={'/auth/login'} className="btn btn-ghost font-bold
            text-lg hover:bg-gray-100"><FaUser/>login
                        </Link>)
                }

            </div>
        </div>
    );
};

export default Navbar;