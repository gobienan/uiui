import { revealHeading } from './helper';

const config = {
  translateY: ['100%', 0],
  translateX: [40, 0],
  translateZ: 0,
  opacity: [0, 1],
};
export const reveal = async () => {
  const headline = document.querySelector('.uiui-headline.example-2');
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
      'https://codesandbox.io/embed/uiui-headline-example-2-7y6ne?fontsize=14&hidenavigation=1&theme=dark&codemirror=1';
    editor.setAttribute('src', url);
  }, 1000);
};
