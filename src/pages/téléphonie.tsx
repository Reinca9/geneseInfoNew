import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import PhoneBody from "../components/téléphonieMain";
import PDFViewer from "../components/iframePDF";
const Phone: React.FC = () => {

  return (
  <div className="telephoniePage">
   <Navbar /> 
   <hr  className="hrHomeBody"/>
   <PhoneBody/>
   <PDFViewer/>
   <Footer/>
  </div>
  );
}

export default Phone;