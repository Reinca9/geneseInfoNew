import React from "react";
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ContactBody from "../components/contactBody";

const Contact: React.FC = () => {
  
 
  return (
  <div>
   <Navbar /> 
    <ContactBody/>
   <Footer/>
  </div>
  );
}

export default Contact;