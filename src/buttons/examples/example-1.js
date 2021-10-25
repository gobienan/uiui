import { revealHeading } from './helper';

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
    await revealHeading({ elem, config });
  }
};
