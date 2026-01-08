// Global captcha variable
var currentCaptcha = "";

// Generate Captcha
function generateCaptcha() {
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    currentCaptcha = "";
    for (var i = 0; i < 5; i++) {
        currentCaptcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById("captcha").innerText = currentCaptcha;
}

// Validate Login Form
function validateForm() {
    var userCaptcha = document.getElementById("userCaptcha").value;
    if (userCaptcha !== currentCaptcha) {
        alert("Wrong Captcha");
        generateCaptcha();
    } else {
        window.location.href = "dashboard.html";
    }
}

// Open Sign Up Form
function openSignup() {
    hideAll();
    document.getElementById("signupBox").style.display = "block";
}

// Back to Login
function backToLogin() {
    document.getElementById("signupBox").style.display = "none";
    document.getElementById("forgotPasswordBox").style.display = "none";
    document.getElementById("forgotIdBox").style.display = "none";

    document.getElementById("loginBox").style.display = "block";
    document.getElementById("signupBtnBox").style.display = "block";
}

// Open Forgot Password
function openForgotPassword() {
    hideAll();
    document.getElementById("forgotPasswordBox").style.display = "block";
}

// Open Forgot ID
function openForgotId() {
    hideAll();
    document.getElementById("forgotIdBox").style.display = "block";
}

// Hide all main boxes
function hideAll() {
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("signupBox").style.display = "none";
    document.getElementById("forgotPasswordBox").style.display = "none";
    document.getElementById("forgotIdBox").style.display = "none";
    document.getElementById("signupBtnBox").style.display = "none";
}

// Create Account Demo
function createAccount() {
    alert("Account Created! (Demo)");
    backToLogin();
}

// Initialize captcha on page load
generateCaptcha();


let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const slider = document.querySelector(".slider");

function showNextSlide() {
    currentSlide++;
    
    // Agar aakhri slide par pahunch gaye toh wapas pehli par jayein
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    
    // Slide ko aage khiskani ki calculation
    const offset = -currentSlide * 100;
    slider.style.transform = `translateX(${offset}%)`;
}

// Har 3 second (3000ms) mein function ko chalayein
setInterval(showNextSlide, 3000);