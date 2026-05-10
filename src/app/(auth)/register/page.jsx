'use client'
import Link from "next/link";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";

const RegisterPage = () => {

    // react hook form
    const { register, handleSubmit, reset, formState: { errors } } = useForm()

    // get submit function
    const getSubmit = async (userData) => {
        const { email, password } = userData;
    }

    return (
        <div className="py-20 px-5 bg-gray-50">

            <div className="bg-white shadow-lg card max-w-[400px] mx-auto py-8 px-6 border-gray-300">
                <h2 className="text-center text-[2rem] font-bold text-[#2D6A4F]">Register your account</h2>

                <form onSubmit={handleSubmit(getSubmit)} className="">

                    {/* name */}
                    <fieldset className="fieldset mt-6">
                        <legend className="fieldset-legend text-[1rem] text-gray-700">Name</legend>
                        <input {...register("name", { required: 'Name is required' })} type="text" className="input text-gray-800" placeholder="Your Name" />
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

                    {/* password */}
                    <fieldset className="fieldset mt-3">
                        <legend className="fieldset-legend text-[1rem] text-gray-700">Password</legend>
                        <input {...register("password", { required: 'Password is required' })} type="password" className="input text-gray-800 w-full" placeholder="Your Password" />
                        {errors.password && (
                            <p className='text-red-500'>{errors.password.message}</p>
                        )}
                    </fieldset>

                    <input type="submit" value="Register" className="btn btn-block bg-[#40916C] text-[#ffffff] hover:bg-[#2D6A4F] mt-6" />

                </form>
            </div>
        </div>
    );
};

export default RegisterPage;