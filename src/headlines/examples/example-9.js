import { revealHeading } from './helper';

export const reveal = async () => {
  const headlineText = document.querySelector('.uiui-headline.example-9 .uiui-highlight span');
  const headlineHighlightWrap = document.querySelector('.uiui-headline.example-9 .uiui-highlight');
  headlineHighlightWrap.innerHTML = new Array(3)
    .fill(0)
    .map((_, i) => `<span class="${i > 0 ? 'uiui-layer' : ''}">${headlineText.textContent}</span>`)
    .join(' ');
  const layers = [...document.querySelectorAll('.uiui-headline.example-9 .uiui-layer')];

  setTimeout(() => {
    const keyframes = () =>
      new Array(20).fill(0).map(() => ({
        clip: `rect(${Math.random() * 90}px, 9999px, ${Math.random() * 90}px, 0)`,
        skew: `${Math.random() * 6 - 6}deg`,
      }));
    revealHeading({
      elem: layers[0],
      config: {
        loop: true,
        easing: 'steps(2)',
        duration: 10000,
        keyframes: keyframes(),
        translateZ: 0,
      },
    });
    revealHeading({
      elem: layers[1],
      config: {
        loop: true,
        easing: 'steps(2)',
        duration: 5000,
        keyframes: keyframes(),
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
      'https://codesandbox.io/embed/uiui-headline-example-9-nqiyw?fontsize=14&hidenavigation=1&theme=dark';
    editor.setAttribute('src', url);
  }, 1000);
};
