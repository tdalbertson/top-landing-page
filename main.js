// Set sticky header on scroll
const primaryHeader = document.querySelector('.primary-header')
const scrollWatcher = document.createElement('div'); // Create empty div element

scrollWatcher.setAttribute('data-scroll-watcher', ''); // Add emtpy data attribute
primaryHeader.before(scrollWatcher); // Place before header

const navObserver = new IntersectionObserver((entries) => {
    // Toggle sticking class if isIntersecting is false
    primaryHeader.classList.toggle('sticking', !entries[0].isIntersecting);
});

// Seeing if scrollWatcher is off page
navObserver.observe(scrollWatcher);

