import React, { useState } from 'react';


function PdfGenerator() {
  const [pdfData] = useState({
    title: 'My PDF Report',
    content: 'This is some content for the PDF.',
    imageUrl: 'https://example.com/image.jpg',
  });

 

  return (
    <div>
      <button onClick={generatePdf}>Generate PDF</button>
    </div>
  );
}

export default PdfGenerator;
