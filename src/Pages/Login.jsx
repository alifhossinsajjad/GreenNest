
import React, { use, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { AuthContext } from '../Provider/AuthContext';
import { FaEyeSlash, FaRegEye } from 'react-icons/fa';
import { sendPasswordResetEmail} from 'firebase/auth';
import { auth } from '../Firebase/Firebase.config';




const Login = () => {

    const { logInUser, signInWithGoogle } = use(AuthContext);

    const [showPassword, setShowPassword] = useState(false)

    const emailRef = useRef();

    const [error, setError] = useState('')

    const location = useLocation()
    // console.log(location);
    const navigate = useNavigate()



    const hanleLogIn = (event) => {
        event.preventDefault();


        const email = event.target.email?.value;
        const password = event.target.password.value;


        logInUser(email, password)
            .then((result) => {
                console.log(result.user);
                toast.success('LogIn successful')
                // navigate (`${location.state ? location.state : '/'}`);
                navigate(location?.state || '/')

                event.target.reset()

            })
            .catch((error) => {
                const errorCode = error.code;
                console.log(error);
                // toast.error('invalid yor email or password')

                setError(errorCode)

            })

    }


    const handleForgetPassword = () => {
        const email = emailRef.current.value;
        if (!email) {
            toast.error('Please provide your email address to reset password')
            return;
        }
        sendPasswordResetEmail(auth, email)
            .then(() => {
                console.log('password reset');
                toast.success('Password reset email sent. Please check your email.')
            })
            .catch((error) => {
                console.log(error);
            })
    }


    const handlegoogleSignIn = () => {
            signInWithGoogle()
                .then((result) => {
                    console.log(result.user);
                    navigate(location?.state || '/')
                })
                .catch((error) => {
                    console.log(error);
                })
        }




    const handleShowPassord = () => {
        setShowPassword(!showPassword)
    }





    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='font-semibold text-2xl text-center '>Login your account</h2>
                <div className="card-body">
                    <form onSubmit={hanleLogIn}>
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input type="email"
                                name='email'
                                ref={emailRef}
                                className="input" placeholder="Email"
                                required />

                            <div className="relative" >
                                <label className="label">Password</label>
                                <input type={showPassword ? 'text' : 'password'}
                                    name='password'
                                    className="input" placeholder="Password"
                                    required />
                                <span
                                    onClick={handleShowPassord}
                                    className="absolute right-8 top-8 cursor-pointer z-50"
                                >
                                    {showPassword ? <FaRegEye /> : <FaEyeSlash />}
                                </span>
                            </div>
                            <div>
                                <button
                                    type='submit'
                                    onClick={handleForgetPassword} className='hover:underline'>Forget Password</button></div>

                            {error && <p className='text-red-600 mt-2'>Invalid Your emial/password</p>}


                            <button className="btn btn-neutral mt-4">Login</button>


                            
                        </fieldset>
                    </form>
                     <button onClick={handlegoogleSignIn} className="btn bg-white text-black border-[#e5e5e5]">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Login with Google
                        </button>
                </div>
                <p className='text-center'>Dont’t Have An Account ? <Link to={'/auth/register'} className='text-secondary'>Register</Link></p>
            </div>

        </div>
    );
};

export default Login;