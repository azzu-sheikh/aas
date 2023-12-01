function generatePDF() {
    var element = document.getElementById('myForm');
    html2pdf(element);
}
function generateResume() {
    var fn = document.getElementById("fname").value;
    var mob = document.getElementById("mobile").value;
    var email = document.getElementById("email").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var city = document.getElementById("city").value;
    var pincode = document.getElementById("pin").value;
    var country = document.getElementById("country").value;
    var prodetails = document.getElementById("prohistory").value;
    var country = document.getElementById("country").value;
    var country = document.getElementById("country").value;


    // Display values in template
    localStorage.setItem('fname',fn);
    localStorage.setItem('mobile',mob);
    localStorage.setItem('email',email);
    localStorage.setItem('input[name="gender"]:checked',gender);
    localStorage.setItem('city',city);
    localStorage.setItem('pin',pincode);
    localStorage.setItem('country',country);
    localStorage.setItem('country',designation);


    localStorage.setItem(".profiletext h2").innerText = fn + " " + ln;
    localStorage.setItem(".contactinfo li:nth-child(1) .text").innerText = mob;
    localStorage.setItem(".contactinfo li:nth-child(2) .text").innerText = email;
    localStorage.setItem(".contactinfo li:nth-child(3) .text").innerText = "website"; // Add your website value here
    localStorage.setItem(".contactinfo li:nth-child(4) .text").innerText = "address"; // Add your address value here

    // Add more fields as needed
    window.location.href = 'index2.html';
}
function displayImage() {
    // Retrieve data from localStorage
    const resumeImage = localStorage.getItem('resumeImage');

    // Display the image
    const resumeImageElement = document.getElementById('pic');
    if (resumeImage) {
        resumeImageElement.src = resumeImage;
        resumeImageElement.style.display = 'block';
    }
}

// Execute the displayImage function on resume.html
if (window.location.pathname.includes('index2.html')) 
    displayImage();

    function generateResume() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const education = document.getElementById('education').value;

        // Add more fields as needed

        // Store data in localStorage to pass to the next page
        localStorage.setItem('resumeName', name);
        localStorage.setItem('resumeEmail', email);
        localStorage.setItem('resumeEducation', education);

        // Redirect to the resume page
        window.location.href = 'resume.html';

        // Prevent form submission (to avoid page reload)
        return false;
    }