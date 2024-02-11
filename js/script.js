function home(){
    window.location.href = 'index.html';
}
function Admin(){
    window.location.href = 'login.html';
}
function User(){
    
    window.location.href = 'signup.html';
}



function loginto() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Add your login verification logic here
    // For simplicity, let's navigate to the sample login page if the username and password are both "admin"
    if (username === "admin" && password === "admin") {
        alert('Login Successful');
        window.location.href = 'adminhome.html'; // Replace with your actual login page
    } else {
        alert('Login Failed');
    }
}

function dleval(){}
function logout(){
    alert('Logout Successful');
    window.location.href = 'index.html'; 

}

function loguser() {
    var username = document.getElementById('username2').value;
    var password = document.getElementById('password2').value;


    if (username === "batch8" && password === "batch8") {
        alert('Login Successful');
        window.location.href = 'userhome.html'; // Replace with your actual login page
    } else {
        alert('Login Failed');
    }
}
function signuser(){
    window.location.href = 'usersign.html'; 

}
function dr_Detection(){
    window.location.href = 'dr_detection.html'
}
function history(){
    window.location.href = 'history.html'
}

function signup() {
    var newUsername = document.getElementById('new-username').value;
    var newPassword = document.getElementById('new-password').value;
    var reenterPassword = document.getElementById('reenter-password').value;
    var dob = document.getElementById('dob').value;

    // Add your signup verification logic here
    // For simplicity, let's display a success message if passwords match
    if (newPassword === reenterPassword) {
        alert('Account created successfully');
          window.location.href = 'signup.html'; 
    } else {
        alert('Passwords do not match');
    }
}