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
document.getElementById('move-button-right-classroom').addEventListener('click', function() {
  gsap.to('.classroom', { x: '-=400', duration: 1 });
});

document.getElementById('move-button-left-classroom').addEventListener('click', function() {
  gsap.to('.classroom', { x: '+=400', duration: 1 });
});


document.getElementById('move-button-right-church').addEventListener('click', function() {
  gsap.to('.church', { x: '-=400', duration: 1 });
});

document.getElementById('move-button-left-church').addEventListener('click', function() {
  gsap.to('.church', { x: '+=400', duration: 1 });
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


const openButtons = document.querySelectorAll("[data-open-modal]");
const closeButtons = document.querySelectorAll("[data-close-modal]");
const overlay = document.querySelector("[data-overlay]");

openButtons.forEach(button => {
  button.addEventListener("click", () => {
    const modalId = button.getAttribute("data-open-modal");
    const modal = document.querySelector(`[data-modal="${modalId}"]`);
    modal.classList.add("open");
    overlay.classList.add("open");
    document.body.classList.add("modal-open");
  });
});

closeButtons.forEach(button => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    modal.classList.remove("open");
    overlay.classList.remove("open");
    document.body.classList.remove("modal-open");
  });
});
