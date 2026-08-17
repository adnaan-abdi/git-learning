const toast = document.querySelector('#toast');
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('visible'), 2800);
}

document.querySelectorAll('[data-toast]').forEach((item) => {
  const activate = () => showToast(item.dataset.toast);
  item.addEventListener('click', activate);
  item.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      activate();
    }
  });
});

document.querySelectorAll('.nav button').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelector('.nav button.active').classList.remove('active');
    document.querySelector('.nav button[aria-current="page"]').removeAttribute('aria-current');
    button.classList.add('active');
    button.setAttribute('aria-current', 'page');
    document.querySelector('#page-label').textContent = button.dataset.page;
    showToast(`${button.dataset.page} selected`);
  });
});

document.querySelector('#add-work').addEventListener('click', () => showToast('New project space created.'));
document.querySelector('#search').addEventListener('click', () => showToast('Search is ready for your projects.'));
