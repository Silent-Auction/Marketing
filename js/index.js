const card1 = document.querySelector('.card');

card1.addEventListener('mouseenter', () => {
  card1.style.transform = 'scale(1.3)';
  card1.style.transition = 'all 0.4s';
});

card1.addEventListener('mouseleave', () => {
  card1.style.transform = 'scale(1.0)';
  card1.style.transition = 'all 0.4s';
});

console.log(card1);
