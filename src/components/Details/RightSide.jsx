'use client'
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const RightSide = () => {

    // react form hook
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    // get submit function
    const getSubmit = async (userData) => {
        const { name, email, phone, address } = userData;

        reset();

        toast.success('Booking Confirmed!')
    }


    return (
        <div className="card shadow-lg p-8 bg-white">
            <h2 className="text-[2rem] text-[#2D6A4F] font-bold ">Book This Animal</h2>

            <form onSubmit={handleSubmit(getSubmit)}>

                {/* name */}
                <fieldset className="fieldset">
                    <legend className="fieldset-legend text-[1rem] text-gray-700">Name</legend>
                    <input {...register("name", { required: 'Name is required' })} type="text" className="input text-gray-800" placeholder="Your Name" />
                    {errors.name && (
                        <p className='text-red-500'>{errors.name.message}</p>
                    )}
                </fieldset>

                {/* email */}
                <fieldset className="fieldset">
                    <legend className="fieldset-legend text-[1rem] text-gray-700">Email</legend>
                    <input {...register("email", { required: 'Email is required' })} type="email" className="input text-gray-800" placeholder="Your Email" />
                    {errors.email && (
                        <p className='text-red-500'>{errors.email.message}</p>
                    )}
                </fieldset>

                {/* phone */}
                <fieldset className="fieldset">
                    <legend className="fieldset-legend text-[1rem] text-gray-700">Phone Number</legend>
                    <input {...register("phone", { required: 'Phone Number is required' })} type="text" className="input text-gray-800" placeholder="Your Phone Number" />
                    {errors.phone && (
                        <p className='text-red-500'>{errors.phone.message}</p>
                    )}
                </fieldset>

                {/* address */}
                <fieldset className="fieldset">
                    <legend className="fieldset-legend text-[1rem] text-gray-700">Address</legend>
                    <input {...register("address", { required: 'Address is required' })} type="text" className="input text-gray-800" placeholder="Your Address" />
                    {errors.address && (
                        <p className='text-red-500'>{errors.address.message}</p>
                    )}
                </fieldset>

                {/* submit btn */}
                <input className="btn btn-block bg-[#40916C] text-[#ffffff] hover:bg-[#2D6A4F] mt-6" type="submit" value="Confirm booking" />
            </form>
        </div>
    );
};

export default RightSide;