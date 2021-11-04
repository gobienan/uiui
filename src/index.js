import anime from 'animejs';
import { init as headlines } from './headlines';
import { init as buttons } from './buttons';
import { init as spinners } from './spinners';

const pages = {
  headlines,
  buttons,
  spinners,
};

const setIndicator = ({ event, elem, indicatorClass = 'Indicator', loadPage }) => {
  event?.preventDefault?.();
  const target = event?.currentTarget || elem;
  const indicator = document.querySelector(`.${indicatorClass}`);
  indicator.classList.add('is-visible');

  const nav = document.querySelector('nav');
  const { width, x } = target.getBoundingClientRect();
  const { x: indicatorX } = indicator.getBoundingClientRect();
  const { x: navX } = nav.getBoundingClientRect();
  anime({
    targets: indicator,
    width,
    translateX: [indicatorX - navX, x - navX - 4],
    translateZ: 0,
    easing: 'spring(1, 70, 12, 6)',
  });
  if (loadPage) {
    pages[target.dataset.page]();
    document.querySelector('body').classList = '';
    document.querySelector('body').classList.add(`is-${target.dataset.page}`);
  }
};
const hideIndicator = ({ indicatorClass }) => {
  const indicator = document.querySelector(`.${indicatorClass}`);
  if (indicator) {
    indicator.classList.toggle('is-visible');
  }
};

const navigationItems = document.querySelectorAll('nav > a');
navigationItems.forEach((i) => {
  i.addEventListener('click', (event) => setIndicator({ event, loadPage: true }));
  i.addEventListener('mouseover', (event) => setIndicator({ event, indicatorClass: 'HiddenIndicator' }));
  i.addEventListener('mouseleave', (event) => hideIndicator({ event, indicatorClass: 'HiddenIndicator' }));
});

const toggleCode = () => {
  document.querySelector('.editor-wrap').classList.toggle('is-visible');
};

window.addEventListener('load', () => {
  setIndicator({ elem: navigationItems[0], loadPage: true });
  setTimeout(() => {
    const uiuiCodeButtons = [...document.querySelectorAll('.uiui-code')];
    console.log(uiuiCodeButtons);
    uiuiCodeButtons.forEach((b) => b.addEventListener('click', toggleCode));
    document.querySelector('.editor-close-times').addEventListener('click', toggleCode);
  }, 600);
});
