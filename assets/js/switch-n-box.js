document.querySelectorAll('[data-switch').forEach(switch_item => {
  switch_item.addEventListener('click', event => {
    document.querySelector(`[data-box="${switch_item.getAttribute('data-switch')}"]`).classList.toggle('status--active');
  });
});