import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import PDFViewerMentions from "../components/mentionsLeg";

const Mentions: React.FC = () => {
  
 
  return (
  <div>
   <Navbar /> 
   <hr  className="hrHomeBody"/>
   <PDFViewerMentions/>
   <Footer/>
  </div>
  );
}

export default Mentions;