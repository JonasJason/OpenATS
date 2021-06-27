// Welcome to OpenATS

a = "Welcome to OpenATS";
console.log(a);


// Reading the PDF input

function readPDF(file) {

    const reader = new FileReader();
    reader.addEventListener('load', (event) => {
      pdf.src = event.target.result;
    });
    reader.readAsArrayBuffer(file);
  }


  // Writing the information to different arrays

function writePDF(file) {

    var name = [];
    var contacts = [];
    var experience = [];
    var skills = [];

}