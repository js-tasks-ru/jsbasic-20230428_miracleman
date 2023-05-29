function toggleText() {
  button = document.querySelector('.toggle-text-button');

  button.addEventListener('click', () => {
    text.toggleAttribute('hidden');
  });
  
}
