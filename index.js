// Welcome to OpenATS

a = "Welcome to OpenATS";
console.log(a);


//////////////////////////////////////////////////////////////


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

// I'm guessing we're going to have to look for bolded statements or words with larger fonts
// than others in order to separate and parse the information, then add it to the correct []

