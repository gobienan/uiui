import { revealHeading } from './helper';

export const reveal = async () => {
  const button = document.querySelector('.uiui-button.example-2');
  const buttonSpan = document.querySelector('.uiui-button.example-2 span');

  button.innerHTML = `<span>${buttonSpan.textContent}</span><span>${button.dataset.back}</span>`;
  const spans = [...document.querySelectorAll('.uiui-button.example-2 span')];

  const revealBack = () => {
    for (let i = 0; i < spans.length; i++) {
      const elem = spans[i];
      revealHeading({
        elem,
        config: {
          translateX: ['-50%', '-50%'],
          translateY: i === 0 ? ['-50%', '-200%'] : ['200%', '-50%'],
          translateZ: 0,
          easing: 'spring(1, 80, 13, 5)',
        },
      });
    }
  };

  const revealFront = () => {
    for (let i = 0; i < spans.length; i++) {
      const elem = spans[i];
      revealHeading({
        elem,
        config: {
          translateX: ['-50%', '-50%'],
          translateY: i === 0 ? ['-200%', '-50%'] : ['-50%', '200%'],
          translateZ: 0,
          easing: 'spring(1, 60, 10, 3)',
        },
      });
    }
  };
  button.addEventListener('mouseover', revealBack);
  button.addEventListener('mouseleave', revealFront);
};
