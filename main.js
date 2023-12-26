// Set sticky header on scroll
const primaryHeader = document.querySelector('.primary-header')
const scrollWatcher = document.createElement('div'); // Create empty div element

scrollWatcher.setAttribute('data-scroll-watcher', ''); // Add empty data attribute
primaryHeader.before(scrollWatcher); // Place before header

const navObserver = new IntersectionObserver((entries) => {
    // Toggle sticking class if isIntersecting is false
    primaryHeader.classList.toggle('sticking', !entries[0].isIntersecting);
}, {rootMargin: "20px 0px 0px 0px"});

// Seeing if scrollWatcher is off page
navObserver.observe(scrollWatcher);

// Open modal
const modal = document.querySelector('#modal');
const signUpButtons = document.querySelectorAll('.sign-up-button');
const closeModal = document.querySelector('.close-button');

// To account for each sign up button
signUpButtons.forEach((button) => {
    button.addEventListener('click', () => {
        modal.showModal();
        modal.style.display = 'flex'; // For adding desired flex display
    }) 
});

closeModal.addEventListener('click', () => {
    modal.close(); 
    modal.style.display = null; // For removing flex display to hide modal
});

// To account for user pressing the ESC key
document.addEventListener('keydown', function(event) {
    let key = event.key
    if (key && 'Escape' === key) {
        modal.style.display = null; // Needed to remove flex display to close modal
        modal.close();
    }
});