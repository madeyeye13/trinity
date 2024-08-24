//////JAVASCRIPT FOR HEADER

document.querySelector('.nav-toggle').addEventListener('click', function() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('show');
});


//HIGHLIGHTING HEADER ON MEDIA QUERY


document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.nav-menu ul li a');
    const currentUrl = window.location.hash || '#home'; 

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
