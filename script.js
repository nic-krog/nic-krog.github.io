// Handle hover effects for sub-headers
document.addEventListener('DOMContentLoaded', function () {
    const subHeaders = document.querySelectorAll('.sub-header');

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

    // Handle the mobile popup
    const popup = document.getElementById('popup');
    const closeBtn = document.getElementById('close-btn');

    console.log('DOM fully loaded and parsed');
    console.log('Window inner width:', window.innerWidth);

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
});
