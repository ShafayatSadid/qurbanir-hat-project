'use client'
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

const RegisterPage = () => {

    // password toggle system
    const [isShowPassword, setIsShowPassword] = useState(false);

    // react hook form
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    // router for redirect
    const router = useRouter()
    // get submit function
    const getSubmit = async (userData) => {
        const { name, profile, email, password } = userData;

        // signUp system from better auth
        const { data, error } = await authClient.signUp.email({
            name: name,
            email: email,
            password: password,
            image: profile,

        });

        console.log({ data, error }, "data:")

        if (error) {
            toast.error(`${error.message}`)
        }
        else {
            toast.success('Successfully Created your Account')
            reset()
            router.push('/')
        }
    }

    return (
        <div className="py-20 px-5 bg-gray-50">

            <div className="bg-white shadow-lg card max-w-[400px] mx-auto py-8 px-6 border-gray-300">
                <h2 className="text-center text-[2rem] font-bold text-[#2D6A4F]">Register your account</h2>

                <form onSubmit={handleSubmit(getSubmit)} className="">

                    {/* name */}
                    <fieldset className="fieldset mt-6">
                        <legend className="fieldset-legend text-[1rem] text-gray-700">Name</legend>
                        <input {...register("name", { required: 'Name is required' })} type="text" className="input w-full text-gray-800" placeholder="Your Name" />
                        {errors.name && (
                            <p className='text-red-500'>{errors.name.message}</p>
                        )}
                    </fieldset>

                    {/* email */}
                    <fieldset className="fieldset mt-3">
                        <legend className="fieldset-legend text-[1rem] text-gray-700">Email</legend>
                        <input {...register("email", { required: 'Email is required' })} type="email" className="input text-gray-800 w-full" placeholder="Your Email" />
                        {errors.email && (
                            <p className='text-red-500'>{errors.email.message}</p>
                        )}
                    </fieldset>

                    {/* Profile */}
                    <fieldset className="fieldset mt-3">
                        <legend className="fieldset-legend text-[1rem] text-gray-700">Profile URL</legend>
                        <input {...register("profile",)} type="email" className="input text-gray-800 w-full" placeholder="Your Profile URL (Optional)" />

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

                    <input type="submit" value="Register" className="btn btn-block bg-[#40916C] text-[#ffffff] hover:bg-[#2D6A4F] mt-6" />

                </form>
            </div>
        </div>
    );
};

export default RegisterPage;