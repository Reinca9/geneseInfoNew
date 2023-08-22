import React from "react";
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const About: React.FC = () => {
  
 
  return (
  <div>
   <Navbar /> 
   <hr  className="hrHomeBody"/>
   <Footer/>
  </div>
  );
}

export default About;