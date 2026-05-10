'use client'
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import profile from "@/assets/profile.png"
import Link from "next/link";

const ProfilePage = () => {

    // get user session
    const { data: session, isPending } = authClient.useSession()
    const user = session?.user;

    return (
        <div className="bg-gray-50 py-20 px-4">
            {isPending ? <div className="h-screen flex justify-center items-center"><span className="loading loading-spinner loading-md"></span></div>
                : <div className="bg-white shadow-lg card max-w-[400px] mx-auto py-8 px-6 border-gray-300">
                    <Image
                        src={user?.image ? user.image : profile}
                        height={100}
                        width={100}
                        alt="profile avatar"
                        className="rounded-full border-3 border-[#40916C] mx-auto" />

                    <h2 className="text-[1.5rem] font-semibold text-center mt-6">{user.name}</h2>

                    <p className="text-sm mt-4 text-center">{user.email}</p>

                    <Link href={"/profile/update"}>
                        <button className="btn mt-6 btn-block bg-[#40916C] text-[#ffffff] hover:bg-[#2D6A4F]">Update Information</button>
                    </Link>
                </div>
            }

        </div>
    );
};

export default ProfilePage;