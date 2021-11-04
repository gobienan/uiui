import { revealHeading } from './helper';

const config = {
  translateY: ['100%', 0],
  translateX: [-40, 0],
  translateZ: 0,
  opacity: [0, 1],
};

export const reveal = async () => {
  const headline = document.querySelector('.uiui-headline.example-3');
  const parts = headline.textContent.split(' ');
  headline.innerHTML = parts.map((p) => `<span>${p}</span>`).join(' ');
  for (const elem of headline.children) {
    await revealHeading({ elem, config });
  }
  setCode();
};

const setCode = () => {
  setTimeout(() => {
    const editor = document.querySelector('.editor iframe');
    const url =
      'https://codesandbox.io/s/uiui-headline-example-3-0ui86?fontsize=14&hidenavigation=1&theme=dark';
    editor.setAttribute('src', url);
  }, 1000);
};
