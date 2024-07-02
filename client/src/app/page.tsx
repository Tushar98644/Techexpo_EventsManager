import Footer from "../components/Footer/Footer";
import Header from "@/components/Navbar/Navbar";
import Card from "@/components/cards/card";


const Minutes = () => {
  return (
    <>
      <Header Heading="Minute List" />
      <div className="flex flex-row gap-12">
        <Card />
      </div>
      <Footer />
    </>
  );
}

export default Minutes;