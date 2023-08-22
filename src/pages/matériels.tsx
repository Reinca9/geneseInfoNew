import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import MaterialBody from "../components/matérielBody";

const Materials: React.FC = () => {

  return (
  <div>
   <Navbar /> 
   <hr  className="hrHomeBody"/>
   <MaterialBody/>
   <Footer/>
  </div>
  );
}

export default Materials;