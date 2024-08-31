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

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.header a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove active class from all links
            navLinks.forEach(link => link.classList.remove('active'));
            // Add active class to the clicked link
            this.classList.add('active');
        });
    });
});

function showSlide(index) {
    const slides = document.querySelectorAll('.profile-content');
    
    // Hide all slides
    slides.forEach(slide => {
        slide.style.display = 'none';
    });

    // Show the selected slide
    slides[index].style.display = 'flex';
}

    document.addEventListener('DOMContentLoaded', function() {
        // Get the header element
        const header = document.querySelector('.header');

        // Check if the current page is the home page
        if (window.location.hash === '#home' || window.location.pathname === '/' || window.location.pathname === '/index.html') {
            // Add the transparent class for the home page
            header.classList.add('transparent');
        } else {
            // Remove the transparent class for other pages
            header.classList.remove('transparent');
        }

        // Optional: Handle hash changes if the user navigates with anchor links
        window.addEventListener('hashchange', function() {
            if (window.location.hash === '#home') {
                header.classList.add('transparent');
            } else {
                header.classList.remove('transparent');
            }
        });
    });


