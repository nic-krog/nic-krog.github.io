document.addEventListener('DOMContentLoaded', function () {
    const subSubHeaders = document.querySelectorAll('.sub-header');

    subSubHeaders.forEach(header => {
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
});

document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('popup');
    const closeBtn = document.getElementById('close-btn');

    // Check if the screen width is less than or equal to 768px (common breakpoint for mobile devices)
    if (window.innerWidth <= 768) {
        // Show the pop-up after the page loads
        popup.classList.add('visible');
    }

    // Close the pop-up when the close button is clicked
    closeBtn.addEventListener('click', function() {
        popup.classList.remove('visible');
    });

    // Close the pop-up when the ESC key is pressed
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            popup.classList.remove('visible');
        }
    });
});
