import anime from 'animejs';
import { init as headlines } from './headlines';
import { init as buttons } from './buttons';
import { init as spinners } from './buttons copy';

const pages = {
  headlines,
  buttons,
  spinners,
};

const setIndicator = (event, elem) => {
  event?.preventDefault?.();
  const target = event?.target || elem;
  const indicator = document.querySelector('.Indicator');
  const nav = document.querySelector('nav');
  const { width, x } = target.getBoundingClientRect();
  const { x: indicatorX } = indicator.getBoundingClientRect();
  const { x: navX } = nav.getBoundingClientRect();
  anime({
    targets: indicator,
    width,
    translateX: [indicatorX - navX, x - navX - 4],
    easing: 'spring(1, 80, 12, 6)',
  });
  pages[target.dataset.page]();
  document.querySelector('body').classList = '';
  document.querySelector('body').classList.add(`is-${target.dataset.page}`);
};

const navigationItems = document.querySelectorAll('nav a');
navigationItems.forEach((i) => i.addEventListener('click', setIndicator));
setTimeout(() => {
  setIndicator(null, navigationItems[1]);
}, 400);
