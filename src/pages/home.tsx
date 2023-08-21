import React from "react";
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../components/navbar";
import HomeBody from "../components/homeBody";
import Footer from "../components/footer";

const Home: React.FC = () => {
  
 
  return (
  <div>
   <Navbar /> 
   <HomeBody/>
   <Footer/>
  </div>
  );
}

export default Home;