import { revealHeading } from './helper';

const config = {
  opacity: [0, 1],
  translateY: [40, 0],
  translateZ: 0,
  easing: 'spring(1, 50, 8, 1)',
};

export const reveal = async () => {
  const headline = document.querySelector('.uiui-headline.example-5');
  revealHeading({ elem: headline, config });
  setCode();
};

const setCode = () => {
  setTimeout(() => {
    const editor = document.querySelector('.editor iframe');
    const url =
      'https://codesandbox.io/s/uiui-headline-example-5-t128p?fontsize=14&hidenavigation=1&theme=dark';
    editor.setAttribute('src', url);
  }, 1000);
};
