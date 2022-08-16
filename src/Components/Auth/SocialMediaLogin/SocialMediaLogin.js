import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import LoadingSpinner from '../../Shared/LoadingSpinner/LoadingSpinner';

const SocialMediaLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || '/'

    //handle error
    let displayError;
    if (error) {
        displayError = (
            <p className="text-red-500 font-bold text-sm text-center">
                Error: {error.message}
            </p>
        );
    }

    //handle loading
    if (loading) {
        <LoadingSpinner></LoadingSpinner>
    }

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
            console.log(user);
        }
    }, [user, from, navigate])
    return (
        <div>
            <button
                className="w-full bg-btnPrimary text-white px-4 py-1 rounded uppercase hover:bg-black"
                onClick={() => signInWithGoogle()}
            >
                Google Login
            </button>

            {displayError}
        </div>
    );
};

export default SocialMediaLogin;