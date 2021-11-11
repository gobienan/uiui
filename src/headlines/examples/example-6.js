import { revealHeading } from './helper';

const config = {
  backgroundSize: [0, '100%'],
  translateZ: 0,
  easing: 'spring(1, 20, 6, 3)',
};

export const reveal = async () => {
  const headline = document.querySelector('.uiui-headline.example-6 span');
  await revealHeading({ elem: headline, config });
  // setCode();
};

const setCode = () => {
  setTimeout(() => {
    if (window.innerWidth < 500) return;
    const editor = document.querySelector('.editor iframe');
    const url =
      'https://codesandbox.io/embed/uiui-headline-example-6-y8kdp?fontsize=14&hidenavigation=1&theme=dark&codemirror=1';
    editor.setAttribute('src', url);
  }, 1000);
};
