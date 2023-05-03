/* eslint-disable react/prop-types */
import React, { useContext, useState } from 'react';
import {FcGoogle} from "react-icons/fc"
import {FaGithub} from "react-icons/fa"
import { AuthContext } from '../../Provider/AuthProvider';
import { toast } from 'react-hot-toast';
import {useNavigate} from "react-router-dom";
const SocialLogin = ({from}) => {
    const [error,setError] = useState("")
    const {GoogleSignIn,GithubSignIn} = useContext(AuthContext);
const navigate = useNavigate()
    const handleWithGoogleSignIn = () => {
        setError("")
        GoogleSignIn()
        .then(res => {
            const currentUser = res.user;
            toast.success(`Hey, ${currentUser.displayName} welcome to Testy Food`)
            navigate(from,{replace:true})
        })
        .then(err => {
            console.log(err.message);
        })
    }


    const handleWithGitHubSignIn = () => {
        setError("")
        GithubSignIn()
        .then(res => {
            const currentUser = res.user;
            toast.success(`Hey, ${currentUser.displayName} welcome to Testy Food`)
            navigate(from,{replace:true})
        })
        .then(err => {
            console.log(err.message);
        })
    }



    return (
        <div className='space-y-3 mt-3 w-full md:w-10/12 mx-auto'>
            <button onClick={handleWithGoogleSignIn} className='w-full  flex justify-center items-center gap-2 border-2 py-2 rounded-full'>
                <FcGoogle className='text-3xl'></FcGoogle><span className='font-medium'>Continue With Google</span></button>
            <button onClick={handleWithGitHubSignIn} className='w-full  flex justify-center items-center gap-2 border-2 py-2 rounded-full'>
                <FaGithub className='text-3xl'></FaGithub><span className='font-medium'>Continue With GitHub</span></button>
            <p className='text-center text-red-600'>{error}</p>
        </div>
    );
};

export default SocialLogin;