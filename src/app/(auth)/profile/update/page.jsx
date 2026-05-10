'use client'
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const UpdateProfilePage = () => {

    // router
    const router = useRouter()
    // react hook form
    const { register, handleSubmit, reset, formState: { errors } } = useForm()

    // get submit function
    const getSubmit = async (userData) => {
        const { name, profile } = userData;

        const { data, error } = await authClient.updateUser({
            image: profile,
            name: name,
        })

        console.log({ data, error }, "data:")

        if (error) {
            toast.error(`${error.message}`)
        }
        else {
            toast.success('Updated Your Profile')
            reset()
            router.push('/profile')
        }
    }


    return (
        <div className="py-20 px-5 bg-gray-50">

            <div className="bg-white shadow-lg card max-w-[400px] mx-auto py-8 px-6 border-gray-300">

                <h2 className="text-center text-[2rem] font-bold text-[#2D6A4F]">Update Your Profile</h2>

                <form onSubmit={handleSubmit(getSubmit)} className="">
                    {/* name */}
                    <fieldset className="fieldset mt-6">
                        <legend className="fieldset-legend text-[1rem] text-gray-700">Name</legend>
                        <input {...register("name")} type="text" className="input w-full text-gray-800" placeholder="Your Name" />
                        {errors.name && (
                            <p className='text-red-500'>{errors.name.message}</p>
                        )}
                    </fieldset>

                    {/* Profile */}
                    <fieldset className="fieldset mt-3">
                        <legend className="fieldset-legend text-[1rem] text-gray-700">Profile URL</legend>
                        <input {...register("profile")} type="text" className="input text-gray-800 w-full" placeholder="Your Profile URL" />

                    </fieldset>

                    <input type="submit" className='btn mt-6 btn-block bg-[#40916C] text-[#ffffff] hover:bg-[#2D6A4F]' value="Confirm Update" />
                </form>
            </div>

        </div>
    );
};

export default UpdateProfilePage;