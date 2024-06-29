import Footer from "@/components/Footer/Footer";
import Gallery_base from "@/components/Gallery/gallery_base";
import Gallery_form from "@/components/Gallery_form/gallery_form";
import Navbar from "@/components/Navbar/Navbar";

const Gallery = () => {
    return (
        <><Navbar Heading="Gallery" />
            <Gallery_form />
            <Gallery_base />
            <Footer /></>
    );
}



export default Gallery;