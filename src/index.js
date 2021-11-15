import anime from 'animejs';
import { init as headlines } from './headlines';
import { init as buttons } from './buttons';
import { init as spinners } from './spinners';
import { init as about } from './about';

const pages = {
  headlines,
  buttons,
  spinners,
  about,
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
    initCodeButton();
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

var headlineUrls = [
  'https://codesandbox.io/embed/uiui-headline-example-1-qs5uw?fontsize=14&hidenavigation=1&theme=dark&codemirror=1',
  'https://codesandbox.io/embed/uiui-headline-example-2-7y6ne?fontsize=14&hidenavigation=1&theme=dark&codemirror=1',
  'https://codesandbox.io/embed/uiui-headline-example-3-0ui86?fontsize=14&hidenavigation=1&theme=dark&codemirror=1',
  'https://codesandbox.io/embed/uiui-headline-example-4-uv9pd?fontsize=14&hidenavigation=1&theme=dark&codemirror=1',
  'https://codesandbox.io/embed/uiui-headline-example-5-t128p?fontsize=14&hidenavigation=1&theme=dark&codemirror=1',
  'https://codesandbox.io/embed/uiui-headline-example-6-y8kdp?fontsize=14&hidenavigation=1&theme=dark&codemirror=1',
  'https://codesandbox.io/embed/uiui-headline-example-7-x6plw?fontsize=14&hidenavigation=1&theme=dark&codemirror=1',
  'https://codesandbox.io/embed/uiui-headline-example-8-5gkz1?fontsize=14&hidenavigation=1&theme=dark&codemirror=1',
  'https://codesandbox.io/embed/uiui-headline-example-9-nqiyw?fontsize=14&hidenavigation=1&theme=dark&codemirror=1',
];
const buttonUrls = [
  'https://codesandbox.io/embed/uiui-button-example-1-o9xi9?fontsize=14&hidenavigation=1&theme=dark&codemirror=1',
  'https://codesandbox.io/embed/uiui-button-example-2-nimmv?fontsize=14&hidenavigation=1&theme=dark&codemirror=1',
  'https://codesandbox.io/embed/uiui-button-example-3-4zovu?fontsize=14&hidenavigation=1&theme=dark&codemirror=1',
  'https://codesandbox.io/embed/uiui-button-example-4-llm1j?fontsize=14&hidenavigation=1&theme=dark&codemirror=1',
  'https://codesandbox.io/embed/uiui-button-example-5-q0qlg?fontsize=14&hidenavigation=1&theme=dark&codemirror=1',
  'https://codesandbox.io/embed/uiui-button-example-6-fpjdi?fontsize=14&hidenavigation=1&theme=dark&codemirror=1',
  'https://codesandbox.io/embed/uiui-button-example-7-3rvyh?fontsize=14&hidenavigation=1&theme=dark&codemirror=1',
  'https://codesandbox.io/embed/uiui-button-example-8-ottdp?fontsize=14&hidenavigation=1&theme=dark&codemirror=1',
  'https://codesandbox.io/embed/uiui-button-example-9-cw890?fontsize=14&hidenavigation=1&theme=dark&codemirror=1',
];
const urls = {
  ['is-headlines']: headlineUrls,
  ['is-buttons']: buttonUrls,
};

const openCode = (index) => {
  const anchor = document.createElement('a');
  anchor.target = '_blank';
  anchor.href = urls[document.body.classList][index];
  anchor.rel = 'noopener noreferrer';
  anchor.click();
  anchor.remove();
};

const initCodeButton = () => {
  const uiuiCodeButtons = [...document.querySelectorAll('.uiui-code')];
  uiuiCodeButtons.forEach((b, i) => {
    b.addEventListener('click', () => openCode(i));
  });
};

window.addEventListener('load', () => {
  setIndicator({ elem: navigationItems[0], loadPage: true });
  setTimeout(initCodeButton, 600);
  const footerFollow = document.querySelector('.footer-follow');
  footerFollow.addEventListener('click', () => plausible('clicked-footer-follow'));

  // urls.forEach((url) => {
  //   const iframe = document.createElement('iframe');
  //   iframe.setAttribute('style', 'display:none;width:500px;height:500px;');
  //   iframe.src = url;
  //   document.body.appendChild(iframe);
  // });
});
