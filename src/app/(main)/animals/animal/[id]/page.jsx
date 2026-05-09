import LeftSide from "@/components/Details/LeftSide";
import RightSide from "@/components/Details/RightSide";
import animalsData from "@/data/animalsData.json"
import Image from "next/image";
const AnimalDetailsPage = async ({ params }) => {

    // get targeted animal
    const { id } = await params;
    const targetedAnimal = animalsData.find(animal => id == animal.id);


    return (


        <div className="max-w-[1200px] mx-auto my-20 p-5 flex justify-center gap-8 flex-wrap">

            {/* left side */}
            <LeftSide targetedAnimal={targetedAnimal}/>

            {/* right side */}
            <div>
                <RightSide/>
            </div>
        </div>

    );
};

export default AnimalDetailsPage;