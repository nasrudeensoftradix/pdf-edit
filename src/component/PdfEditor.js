import React, { useState, useRef } from "react";
import axios from "axios";
import html2pdf from "html2pdf.js";

function PdfToHtmlConverter() {
  const [pdfUrl, setPdfUrl] = useState("");
  const [htmlUrl, setHtmlUrl] = useState("");
  const iframeRef = useRef(null);

  const handlePdfInputChange = (event) => {
    const file = event.target.files[0];
    setPdfUrl(URL.createObjectURL(file));
  };

  const convertPdfToHtml = async () => {
    try {
      let response = await axios.post("http://localhost:3000/convert", {
        pdfUrl,
      });
      console.log(response, "response");
    } catch (error) {
      console.error("PDF to HTML conversion error:", error);
    }
  };

  const updateElementOnClick = (e) => {
    // Access the iframe contentWindow and update its document
    const iframe = iframeRef.current;
    const iframeDocument = iframe.contentDocument;
    iframeDocument.open();
    fetch(
      "https://sulu.cdkm.com/convert/file/st3u6pexm2pyyrn737r421x0bqeayykb/mypdf.html"
    )
      .then((response) => response.text())
      .then((data) => {
        // Set the HTML content in state
        iframeDocument.write(data);
        // Make the content inside the iframe editable
        iframeDocument.body.contentEditable = "true";
        iframeDocument.body.style.width = "49.58333em";
        iframeDocument.body.style.margin = "auto";
        iframeDocument.close();
      })
      .catch((error) => {
        console.error("Error fetching HTML:", error);
      });
  };

  const convertToPdf = () => {
    const iframe = iframeRef.current;
    const iframeDocument = iframe.contentDocument;
    // Add header styles directly to the HTML content
    const headerStyles = iframeDocument.head;

    console.log(iframeDocument.body, "iframeDocument.header");
    // Create a new HTML2PDF instance
    // Create a new HTML2PDF instance
    const pdfOptions = {
      margin: 10,
      filename: "converted.pdf",
      image: { type: "jpeg" },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    const pdf = new html2pdf(iframeDocument.body, pdfOptions);

    // Generate the PDF and offer it for download
    pdf.toPdf().then(() => {
      pdf.outputPdf().then((pdfBlob) => {
        const pdfUrl = URL.createObjectURL(pdfBlob);
        const a = document.createElement("a");
        a.href = pdfUrl;
        a.download = "converted.pdf";
        a.style.display = "none";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(pdfUrl);
      });
    });
  };
  return (
    <div>
      <h1>PDF to HTML Converter</h1>
      <button onClick={convertToPdf}>Convert to PDF(Convert to PDF)</button>
      <button className="btn_" onClick={updateElementOnClick}>
        Load PDF
      </button>
      <div>
        <h2>EDIT Below</h2>
        <iframe
          ref={iframeRef}
          title="Converted HTML"
          width="100%"
          height="500px"
        ></iframe>
      </div>
    </div>
  );
}

export default PdfToHtmlConverter;
