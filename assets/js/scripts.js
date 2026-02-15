var body = document.querySelector('body')
var menuTrigger = document.querySelector('#toggle-main-menu-mobile');
var menuContainer = document.querySelector('#main-menu-mobile');

menuTrigger.onclick = function() {
    menuContainer.classList.toggle('open');
    menuTrigger.classList.toggle('is-active')
    body.classList.toggle('lock-scroll')
}

const mh = document.querySelector('.mouse-highlight');

mh.addEventListener('mousemove', e => {
  const rect = e.target.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  mh.style.setProperty('--x', x + 'px');
  mh.style.setProperty('--y', y + 'px');
});

const mhbox = document.querySelector('.mouse-highlight-box');

mhbox.addEventListener('mousemove', e => {
  const rect = e.target.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  mhbox.style.setProperty('--x', x + 'px');
  mhbox.style.setProperty('--y', y + 'px');
});
