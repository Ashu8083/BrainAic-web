// Initialize the slideshow
var myIndex = 0;
var slideIndex = 1; // For navigation controls

carousel();

function carousel() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    
    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // Increment slide index and loop if necessary
    myIndex++;
    if (myIndex > slides.length) { myIndex = 1; }    
    slides[myIndex-1].style.display = "block";  

    // Show the appropriate message
    var messages = slides[myIndex-1].getElementsByClassName("message");
    for (i = 0; i < messages.length; i++) {
        messages[i].style.display = "block";
    }

    // Set timeout for the next slide
    setTimeout(carousel, 8000); // Change image and message every 5 seconds
}

// Handle the advantage section toggling
document.addEventListener('DOMContentLoaded', function() {
    const options = document.querySelectorAll('.advantage-option');
    const contents = document.querySelectorAll('.advantage-content');
    
    options.forEach(option => {
        option.addEventListener('click', function() {
            // Remove active class from all contents
            contents.forEach(content => content.classList.remove('active'));
            
            // Get the target content ID from data attribute
            const targetId = this.getAttribute('data-target');
            const targetContent = document.getElementById(targetId);
            
            // Add active class to the target content
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
});

// Toggle the mobile menu
function toggleMenu() {
    var navbar = document.getElementById("navbar");
    if (navbar.classList.contains("show")) {
        navbar.classList.remove("show");
    } else {
        navbar.classList.add("show");
    }
}

// Handle navigation dot clicks
function currentSlide(n) {
    slideIndex = n;
    showSlides(slideIndex);
}

// Handle next/previous slide buttons
function plusSlides(n) {
    slideIndex += n;
    showSlides(slideIndex);
}

// Show slides based on the current slide index
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

// Initialize with the first slide
showSlides(slideIndex);
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});

function toggleMenu() {
    var navbar = document.getElementById("navbar");
    if (navbar.classList.contains("show")) {
        navbar.classList.remove("show");
    } else {
        navbar.classList.add("show");
    }
}

