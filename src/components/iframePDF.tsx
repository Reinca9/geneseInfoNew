import React from "react";

const PDFViewer: React.FC = () => {
  return (
    <div>
      <iframe
        title="PDF Viewer"
        src="../videoAssets/Flyer_Campagne-personnalisee-de-Genese-Informatique.pdf#zoom=150"
        width="100%"
        height="800px"
        style={{ border: "none" }}
      />
    </div>
  );
};

export default PDFViewer;