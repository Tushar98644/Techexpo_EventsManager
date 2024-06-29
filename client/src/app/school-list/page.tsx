import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import School_form from "@/components/School_form/School_form";
import School_view from "@/components/School_form/School_view";


const School_List = () => {
    return (
        <>
            <Navbar Heading="School List" />
            <School_form />
            <School_view />
            <Footer />
        </>
    );
}

export default School_List;