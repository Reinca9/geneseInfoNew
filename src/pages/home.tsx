import React from "react";
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../components/navbar";
import CarouselHome from "../components/carouselHome";
import Footer from "../components/footer";

const Home: React.FC = () => {
  
 
  return (
  <div>
   <Navbar /> 
   <hr  className="hrHomeBody"/>
   <CarouselHome/>
   <Footer/>
  </div>
  );
}

export default Home;