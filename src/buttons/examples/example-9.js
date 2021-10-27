import { revealHeading } from './helper';

export const reveal = async () => {
  const buttonSpan = document.querySelector('.uiui-button.example-9 span');
  const button = document.querySelector('.uiui-button.example-9');
  button.innerHTML = `<span>${buttonSpan.textContent}</span><span>${buttonSpan.textContent}</span>`;

  const span = document.querySelector('.uiui-button.example-9 span:last-child');

  const glitch = () => {
    const keyframes = new Array(10).fill(0).map(() => ({
      clipPath: `inset(20% -1px ${(Math.random() * 100).toFixed(0)}% 0)`,
      translateX: `${Math.random() * 1 - 49}%`,
      translateY: `${Math.random() * 1 - 49}%`,
    }));
    keyframes.push({
      clipPath: `inset(80% -6px 0 0)`,
      translateX: '-50%',
      translateY: '-50%',
    });
    revealHeading({
      elem: span,
      config: {
        easing: 'steps(2)',
        duration: 4000,
        keyframes,
        translateZ: 0,
      },
    });
  };

  button.addEventListener('mouseover', glitch);
};
