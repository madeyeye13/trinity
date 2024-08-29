//////JAVASCRIPT FOR HEADER

document.querySelector('.nav-toggle').addEventListener('click', function() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('show');
});


//HIGHLIGHTING HEADER ON MEDIA QUERY


document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.nav-menu ul li a');
    const currentUrl = window.location.hash || 'index.html'; 

    links.forEach(link => {
        if (link.getAttribute('href') === currentUrl) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});




/////HERO IMAGE SECTION

let currentImageIndex = 0;
const images = ["image/1.jpg", "image/2.jpg", "image/3.jpg"];
const heroImage = document.querySelector(".hero-image img");

function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    heroImage.src = images[currentImageIndex];
}

// Change image every 6 seconds
setInterval(changeImage, 6000);



///////////BEST EVENT JAVASCRIPT FOR CONTAINER BOX


// Select all content items
const contentItems = document.querySelectorAll('.content-item');

// Add click event listener to each content item's <h4>
contentItems.forEach(item => {
    const header = item.querySelector('h4');
    const paragraph = item.querySelector('p');

    header.addEventListener('click', () => {
        // Check if the clicked paragraph is currently active
        const isCurrentlyActive = paragraph.classList.contains('active');

        if (!isCurrentlyActive) {
            // Hide all paragraphs and remove 'active' class
            contentItems.forEach(innerItem => {
                innerItem.querySelector('p').style.display = 'none';
                innerItem.querySelector('p').classList.remove('active');
            });

            // Show the clicked paragraph and add 'active' class
            paragraph.style.display = 'block';
            paragraph.classList.add('active');
        }
    });
});


// JAVASCRIPT FOR NUMBER INCREASE


document.addEventListener('DOMContentLoaded', function() {
    const clientCount = document.getElementById('client-count');
    const satisfactionCount = document.getElementById('satisfaction-count');
    const satisfy = document.getElementById('satisfaction-coun');
    const clientTarget = 10;
    const satisfactionTarget = 250;
    const satisfyTarget = 100;
    let hasAnimated = false;

    function animateCount(element, target, suffix = '') {
        let count = 0;
        const duration = 2000;
        const increment = target / (duration / 60);

        function updateCount() {
            count += increment;
            if (count > target) count = target;
            element.textContent = Math.floor(count) + suffix;
            if (count < target) {
                requestAnimationFrame(updateCount);
            }
        }

        requestAnimationFrame(updateCount);
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                hasAnimated = true;
                animateCount(clientCount, clientTarget, '+');
                animateCount(satisfactionCount, satisfactionTarget, '+');
                animateCount(satisfy, satisfyTarget, '%');
            }
        });
    }, {
        threshold: 0.1 // Trigger when at least 10% of the section is in view
    });

    observer.observe(document.getElementById('satis'));
});


$(document).ready(function () {
    var owl = $(".owl-carousel").owlCarousel({
        items: 1, 
        loop: true,
        dots: false, 
        nav: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        margin: 10, 
        responsive: {
            728: {
                items: 2, 
                margin: 18 
            },
            1024: {
                items: 3, 
                margin: 10 
            }
        }
    });

    // Custom dots click event to trigger the carousel change
    $('.custom-dot').click(function () {
        var index = $(this).data('index'); // Get me the index of the clicked dot
        owl.trigger('to.owl.carousel', [index, 300]); // I want you to move to the corresponding dots
    });

    // Sync custom dots with the carousel's current state
    owl.on('changed.owl.carousel', function (event) {
        var currentIndex = event.item.index - event.relatedTarget._clones.length / 2; 
        currentIndex = currentIndex % event.item.count; 
        $('.custom-dot').removeClass('active'); 
        $('.custom-dot').eq(currentIndex).addClass('active');
    });
});



///=====================TESTIMONIAL

let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');
const dots = document.querySelectorAll('.dot');
let startX = 0;
let isSwiping = false;


// Function to show the current testimonial
function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.style.transform = `translateX(-${index * 100}%)`;
        dots[i].classList.toggle('active', i === index);
    });
}

// Dots navigation
dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        currentTestimonial = i;
        showTestimonial(currentTestimonial);
    });
});

// Swipe detection
document.querySelector('.testimonial-section').addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    isSwiping = true;
});

document.querySelector('.testimonial-section').addEventListener('touchmove', (e) => {
    if (!isSwiping) return;
    const moveX = e.touches[0].clientX;
    const diff = startX - moveX;

    if (Math.abs(diff) > 50) {
        if (diff > 0) {
            // Swipe left
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        } else {
            // Swipe right
            currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
        }
        showTestimonial(currentTestimonial);
        isSwiping = false; 
    }
});

document.querySelector('.testimonial-section').addEventListener('touchend', () => {
    isSwiping = false;
});

// Auto-slide testimonials every 5 seconds
setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}, 7000);

// Initial display
showTestimonial(currentTestimonial);

