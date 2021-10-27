import { revealHeading } from './helper';

export const reveal = async () => {
  const button = document.querySelector('.uiui-button.example-7');
  const buttonSpan = document.querySelector('.uiui-button.example-7 span');

  button.innerHTML = `<span>${buttonSpan.textContent}</span><span>${button.dataset.back}</span>`;
  const spans = [...document.querySelectorAll('.uiui-button.example-7 span')];

  const revealBack = () => {
    for (let i = 0; i < spans.length; i++) {
      const elem = spans[i];
      revealHeading({
        elem,
        config: {
          translateX: i === 0 ? ['0', `${button.clientWidth / 1.5}`] : ['-100%', '-50%'],
          translateY: i === 0 ? ['0', `-${button.clientHeight / 1.5}`] : ['100%', '-50%'],
          translateZ: 0,
          easing: 'spring(1, 80, 20, 9)',
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
          translateX: i === 0 ? [`${button.clientWidth / 1.5}`, '0'] : ['-50%', '-100%'],
          translateY: i === 0 ? [`-${button.clientHeight / 1.5}`, '0'] : ['-50%', '100%'],
          translateZ: 0,
          easing: 'spring(1, 80, 20, 9)',
        },
      });
    }
  };
  button.addEventListener('mouseover', revealBack);
  button.addEventListener('mouseleave', revealFront);
};
