import React from "react";
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import LogicielBody from "../components/logicielsBody";


const Software: React.FC = () => {
  
 
  return (
  <div>
   <Navbar /> 
   <hr  className="hrHomeBody"/>
   <LogicielBody/>
   <Footer/>
  </div>
  );
}

export default Software;