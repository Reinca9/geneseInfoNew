import React from "react";

const PDFViewer: React.FC = () => {
  return (
    <div className="téléphoniePDF">
      <iframe
        title="PDF Viewer"
        src={`../videoAssets/Flyer_Campagne-personnalisee-de-Genese-Informatique.pdf#zoom=150&view=FitH&scrollbar=0&toolbar=0&statusbar=0&navpanes=0`}
        width="100%"
        height="800px"
        style={{ border: "none" }}
      />
    </div>
  );
};

export default PDFViewer;
