import { revealHeading } from './helper';

const config = {
  translateY: ['100%', 0],
  translateX: [-40, 0],
  translateZ: 0,
  opacity: [0, 1],
};

export const reveal = async () => {
  const button = document.querySelector('.uiui-button.example-3');
  const buttonSpan = document.querySelector('.uiui-button.example-3 span');
  button.innerHTML = `<span>${buttonSpan.textContent}</span><span></span>`;

  const buttonFill = document.querySelector('.uiui-button.example-3 span:last-child');
  const align = () => {
    revealHeading({
      elem: buttonFill,
      config: {
        translateY: [10, 0],
        translateX: [10, 0],
        translateZ: 0,
        easing: 'spring(1, 80, 4, 5)',
      },
    });
  };

  const tanslate = () => {
    revealHeading({
      elem: buttonFill,
      config: {
        translateY: [0, 10],
        translateX: [0, 10],
        translateZ: 0,
        easing: 'spring(1, 60, 10, 3)',
      },
    });
  };

  button.addEventListener('mouseover', align);
  button.addEventListener('mouseleave', tanslate);
};
