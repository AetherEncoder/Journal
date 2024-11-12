gsap.fromTo(
  ".loading-page", 
  {opacity: 1}, 
  {
    opacity: 0,
    display: "none",
    duration: 1.5,
    delay: 3.5,
    onComplete: function() {
      document.documentElement.classList.remove('loading');
      document.body.classList.remove('loading');
    }
  }
);

// Add event listener to the "HELLO" button
document.getElementById('move-button-right').addEventListener('click', function() {
  gsap.to('.deck', { x: '+=400', duration: 1 });
});

document.getElementById('move-button-left').addEventListener('click', function() {
  gsap.to('.deck', { x: '-=400', duration: 1 });
});

document.querySelectorAll('.navigation-container a').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth'
    });
  });
});