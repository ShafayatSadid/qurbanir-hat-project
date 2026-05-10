'use client'

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

const LoginPage = () => {

    // password toggle system
    const [isShowPassword, setIsShowPassword] = useState(false);

    // react hook form
    const { register, handleSubmit, reset, formState: { errors } } = useForm()

    // get submit function
    const getSubmit = async (userData) => {
        const { email, password } = userData;

        // signin system from better auth
        const { data, error } = await authClient.signIn.email({
            email: email, // required
            password: password, // required
            rememberMe: true,
            callbackURL: "/",
        });

        console.log({data, error}, "data:")

        if (error) {
            toast.error(`${error.message}`)
        }
        else {
            toast.success('Successfully Sign In Your Account')
            reset()  
        }
    }

    return (
        <div className="py-20 px-5 bg-gray-50">

            <div className="bg-white shadow-lg card max-w-[400px] mx-auto py-8 px-6 border-gray-300">
                <h2 className="text-center text-[2rem] font-bold text-[#2D6A4F]">Login to your account</h2>

                <form onSubmit={handleSubmit(getSubmit)} className="">

                    {/* email */}
                    <fieldset className="fieldset mt-6">
                        <legend className="fieldset-legend text-[1rem] text-gray-700">Email</legend>
                        <input {...register("email", { required: 'Email is required' })} type="email" className="input text-gray-800 w-full" placeholder="Your Email" />
                        {errors.email && (
                            <p className='text-red-500'>{errors.email.message}</p>
                        )}
                    </fieldset>

                    {/* password */}
                    <fieldset className="fieldset relative mt-3">
                        <legend className="fieldset-legend text-[1rem] text-gray-700">Password</legend>
                        <input {...register("password", { required: 'Password is required' })} type={isShowPassword ? 'text' : 'password'} className="input text-gray-800 w-full" placeholder="Your Password" />
                        {errors.password && (
                            <p className='text-red-500'>{errors.password.message}</p>
                        )}

                        <span onClick={() => setIsShowPassword(!isShowPassword)} className='text-[1rem] absolute right-3 top-4'>
                            {isShowPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
                        </span>
                    </fieldset>

                    <input type="submit" value="Login" className="btn btn-block bg-[#40916C] text-[#ffffff] hover:bg-[#2D6A4F] mt-6" />

                </form>


                <div className="divider">Or</div>
                <button className="btn btn-block btn-outline text-[1rem] text-[#40916C] hover:bg-[#40916C] hover:text-white">
                    <FcGoogle /> Login with google
                </button>

                <p className='text-[0.785rem] text-center mt-3'>Don&apos;t Have An Account ? <Link className='text-red-500' href={'/register'}>Register</Link> </p>
            </div>
        </div>
    );
};

export default LoginPage;