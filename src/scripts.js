document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const dimmedBackground = document.querySelector('.dimmed-background');
  
    cards.forEach(card => {
      card.addEventListener('click', () => {
        card.classList.toggle('flipped');
        dimmedBackground.classList.toggle('active');
      });
    });
  
    dimmedBackground.addEventListener('click', () => {
      cards.forEach(card => card.classList.remove('flipped'));
      dimmedBackground.classList.remove('active');
    });
  });