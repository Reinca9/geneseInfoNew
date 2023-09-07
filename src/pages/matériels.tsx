import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import MaterialBody2 from "../components/matérielBody2";

const Materials: React.FC = () => {

  return (
  <div>
   <Navbar /> 
   <hr  className="hrHomeBody"/>
   <MaterialBody2/>
   <Footer/>
  </div>
  );
}

export default Materials;