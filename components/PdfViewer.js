import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
// import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PdfViewer = ({ pdfUrl }) => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col">
          <Document file={pdfUrl}>
            <Page pageNumber={1} />
          </Document>
        </div>
      </div>
    </div>
  );
};

export default PdfViewer;
