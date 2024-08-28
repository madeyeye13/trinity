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


$(document).ready(function() {
    var owl = $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        dots: false, // Disable default dots
        nav: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true
    });

    // Sync the custom dots with the owl carousel
    owl.on('changed.owl.carousel', function(event) {
        var index = event.item.index; // Get current index
        $('.custom-dot').removeClass('active'); // Remove active class from all dots
        $('.custom-dot[data-index="' + (index % $('.custom-dot').length) + '"]').addClass('active'); // Add active class to the current dot
    });

    // Add click event to custom dots
    $('.custom-dot').click(function() {
        var index = $(this).data('index'); // Get the index of the clicked dot
        owl.trigger('to.owl.carousel', [index, 300]); // Go to the corresponding slide
    });
});




// $(document).ready(function() {
//     $(".owl-carousel").owlCarousel({
//         items: 1,               // Show one item at a time
//         loop: true,             // Enable continuous loop mode
//         dots: true,             // Show dot indicators for navigation
//         nav: false,             // Hide navigation arrows
//         margin: 10,
//         autoplay: true,         // Enable auto play
//         autoplayTimeout: 5000,  // Set auto play interval to 5000ms (5 seconds)
//         autoplayHoverPause: true // Pause auto play on mouse hover
//     });
// });


// $('.owl-carousel').owlCarousel({
//     loop: true,
//     margin: 30,
//     mouseDrag: true,
//     autoplay: false,
//     dots: true,
//     autoplayHoverPause: true,
//     nav: false,
//     navText: ["<span class='lnr ti-angle-left'></span>","<span class='lnr ti-angle-right'></span>"],
//     responsiveClass: true,
//     responsive: {
//         0: {
//             items: 1
//         },
//         600: {
//             items: 2
//         },
//         1000: {
//             items: 3
//         }
//     }
// });

