window.onload = function () {
    // Retrieve user input from local storage
    var fn = localStorage.getItem("fname");
    var mob = localStorage.getItem("mobile");
    var email = localStorage.getItem("email");
    var gender = localStorage.getItem('input[name="gender"]:checked');
    var city = localStorage.getItem("city");
    var pincode = localStorage.getItem("pin");
    var country = localStorage.getItem("country");
    var designation = localStorage.getItem("designation");
   

    // Display user input in resume
    document.getElementById('display-fname').innerText = fn;
    document.getElementById('display-mobile').innerText = mob;
    document.getElementById('display-email').innerText = email;
    document.getElementById('display-input[name="gender"]:checked').innerText = gender;
    document.getElementById('display-city').innerText =city;
    document.getElementById('display-pin').innerText = pincode;
    document.getElementById('display-country').innerText = country;
    document.getElementById('display-designation').innerText = designation;
    
};
