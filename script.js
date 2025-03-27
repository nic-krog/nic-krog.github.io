// Handle hover effects for sub-headers on desktop
document.addEventListener('DOMContentLoaded', function () {
    const subHeaders = document.querySelectorAll('.sub-header');

    // Desktop hover behavior
    if (window.innerWidth > 768) {
        subHeaders.forEach(header => {
            let hoverTimeout;

            header.addEventListener('mouseenter', function () {
                const hoverImage = this.nextElementSibling?.querySelector('.hover-image');
                if (hoverImage) {
                    // Clear any existing timeout to prevent flickering
                    clearTimeout(hoverTimeout);
                    // Add a slight delay before showing the image
                    hoverTimeout = setTimeout(() => {
                        hoverImage.style.opacity = '1'; // Smoothly show the image
                    }, 100); // 100ms delay
                }
            });

            header.addEventListener('mouseleave', function () {
                const hoverImage = this.nextElementSibling?.querySelector('.hover-image');
                if (hoverImage) {
                    // Clear any existing timeout to prevent flickering
                    clearTimeout(hoverTimeout);
                    // Smoothly hide the image
                    hoverImage.style.opacity = '0';
                }
            });
        });
    }

    // Mobile click behavior
    if (window.innerWidth <= 768) {
        const overlay = document.createElement('div');
        overlay.classList.add('overlay');
        document.body.appendChild(overlay);

        subHeaders.forEach(header => {
            header.addEventListener('click', function (event) {
                event.stopPropagation(); // Prevent event bubbling
                const hoverImageContainer = this.nextElementSibling;
                if (hoverImageContainer && hoverImageContainer.classList.contains('hover-image-container')) {
                    // Toggle the active state of the hover image container and overlay
                    hoverImageContainer.classList.toggle('active');
                    overlay.classList.toggle('active');
                }
            });
        });

        // Close the hover image when clicking on the overlay
        overlay.addEventListener('click', function () {
            const activeHoverImageContainer = document.querySelector('.hover-image-container.active');
            if (activeHoverImageContainer) {
                activeHoverImageContainer.classList.remove('active');
                overlay.classList.remove('active');
            }
        });

        // Close the hover image when clicking outside of it
        document.addEventListener('click', function (event) {
            const activeHoverImageContainer = document.querySelector('.hover-image-container.active');
            if (activeHoverImageContainer && !activeHoverImageContainer.contains(event.target)) {
                activeHoverImageContainer.classList.remove('active');
                overlay.classList.remove('active');
            }
        });
    }
});

// Handle the mobile popup (if needed)
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('close-btn');

if (popup && closeBtn) {
    // Function to show the popup
    function showPopup() {
        if (window.innerWidth <= 768) {
            console.log('Mobile device detected. Showing popup.');
            popup.classList.add('visible');
        } else {
            console.log('Desktop device detected. Popup hidden.');
        }
    }

    // Function to hide the popup
    function hidePopup() {
        console.log('Closing popup.');
        popup.classList.remove('visible');
    }

    // Show the popup on page load if the screen width is <= 768px
    showPopup();

    // Close the popup when the close button is clicked
    closeBtn.addEventListener('click', hidePopup);

    // Close the popup when the ESC key is pressed
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            hidePopup();
        }
    });

    // Optional: Re-check screen width on window resize
    window.addEventListener('resize', function () {
        console.log('Window resized. New width:', window.innerWidth);
        showPopup(); // Re-evaluate whether to show the popup
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const subHeaders = document.querySelectorAll('.sub-header');
    
    subHeaders.forEach(header => {
        const hoverImage = header.nextElementSibling?.querySelector('.hover-image');
        if (hoverImage && hoverImage.src) { // Check if image actually exists
            header.classList.add('has-image');
        }
    });
    
    // Rest of your existing JavaScript...
});
