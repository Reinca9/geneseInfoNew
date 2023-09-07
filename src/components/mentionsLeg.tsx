import React from "react";

const PDFViewerMentions: React.FC = () => {
    return (
      <div className="mentionsLPDF">
        <iframe
          title="PDF Viewer"
          src={``}
          width="100%"
          height="650px"
          style={{ border: "none" }}
        />
      </div>
    );
  };
  
  export default PDFViewerMentions;
  