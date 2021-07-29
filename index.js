// Welcome to OpenATS

a = "Welcome to OpenATS";
console.log(a);


//////////////////////////////////////////////////////////////

// Reading the PDF input
let resumeFile = document.getElementById('resume');
function readPDF(resumeFile) {

    const reader = new FileReader();
    reader.addEventListener('load', (event) => {
      pdf.src = event.target.result;
    });
    reader.readAsArrayBuffer(resumeFile);
    console.log(reader.result);
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

