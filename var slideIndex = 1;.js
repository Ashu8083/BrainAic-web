var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

// Automatic slideshow
var slideInterval = setInterval(function() {
    plusSlides(1);
}, 3000); // Change slide every 3 seconds

function toggleMenu() {
    var navbar = document.getElementById("navbar");
    if (navbar.style.display === "block") {
        navbar.style.display = "none";
    } else {
        navbar.style.display = "block";
    }
}

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
