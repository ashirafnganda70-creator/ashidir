window.addEventListener('scroll', () => {
  document.querySelectorAll('.card').forEach(card => {
    card.style.transform = 'translateY(0px)';
    card.style.opacity = '1';
  });
});
