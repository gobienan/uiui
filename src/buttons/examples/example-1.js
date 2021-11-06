import { animate } from './helper';

const config = {
  easing: 'spring(1, 80, 13, 5)',
  translateZ: 0,
  opacity: [0, 1],
};

export const reveal = async () => {
  const button = document.querySelector('.uiui-button.example-1');
  const parts = button.textContent.split(' ');
  button.innerHTML = parts.map((p) => `<span>${p}</span>`).join(' ');

  for (const elem of button.children) {
    await animate({ elem, config });
  }
  setCode();
};

const setCode = () => {
  setTimeout(() => {
    const editor = document.querySelector('.editor iframe');
    const url =
      'https://codesandbox.io/embed/uiui-button-example-1-o9xi9?fontsize=14&hidenavigation=1&theme=dark&codemirror=1';
    editor.setAttribute('src', url);
  }, 1000);
};
