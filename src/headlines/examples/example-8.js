import { revealHeading } from './helper';

export const reveal = async () => {
  const headlineText = document.querySelector('.uiui-headline.example-8 .uiui-highlight span');
  const headlineHighlightWrap = document.querySelector('.uiui-headline.example-8 .uiui-highlight');
  headlineHighlightWrap.innerHTML = new Array(3)
    .fill(0)
    .map((_, i) => `<span class="${i > 0 ? 'uiui-layer' : ''}">${headlineText.textContent}</span>`)
    .join(' ');
  const layers = [...document.querySelectorAll('.uiui-headline.example-8 .uiui-layer')];

  setTimeout(() => {
    revealHeading({
      elem: layers[0],
      config: {
        translateY: [0, '100%'],
        translateZ: 0,
      },
    });
    revealHeading({
      elem: layers[1],
      config: {
        translateY: [0, '-100%'],
        translateZ: 0,
      },
    });
  }, 500);
  setCode();
};

const setCode = () => {
  setTimeout(() => {
    const editor = document.querySelector('.editor iframe');
    const url =
      'https://codesandbox.io/embed/uiui-headline-example-8-5gkz1?fontsize=14&hidenavigation=1&theme=dark';
    editor.setAttribute('src', url);
  }, 1000);
};
