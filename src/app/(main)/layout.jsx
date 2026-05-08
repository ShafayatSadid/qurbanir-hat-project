import NavBar from "@/components/shared/NavBar";


const MainLayout = ({children}) => {
    return (
        <div>
            <NavBar/>
            <main>{children}</main>
        </div>
    );
};

export default MainLayout;