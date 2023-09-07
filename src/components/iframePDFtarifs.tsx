import React from "react";

const PDFViewerTarifs: React.FC = () => {
  return (
    <div className="tarifsPDF">
      <iframe
        title="PDF Viewer"
        src={`../videoAssets/Tarifs.pdf#toolbar=0&navpanes=0`}
        width="80%"
        height="604px"
        style={{ border: "none" }}
      />   
      <p className="tarifsContractuels">*Tarifs non contractuels</p>
    </div>
  );
};

export default PDFViewerTarifs;
