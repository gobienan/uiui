import { revealHeading } from './helper';

const config = {
  translateY: ['100%', 0],
  translateX: [-40, 0],
  translateZ: 0,
  opacity: [0, 1],
};

export const reveal = async () => {
  const button = document.querySelector('.uiui-button.example-5');
  const buttonSpan = document.querySelector('.uiui-button.example-5 span');
  button.innerHTML = `<span>${buttonSpan.textContent}</span><span></span>`;

  const buttonFill = document.querySelector('.uiui-button.example-5 span:last-child');
  const align = () => {
    revealHeading({
      elem: buttonFill,
      config: {
        width: [20, button.clientWidth],
        height: [4, button.clientHeight],
        translateY: ['-50%', 0],
        translateX: [-10, 0],
        translateZ: 0,
        top: 0,
        easing: 'spring(1, 80, 50, 8)',
      },
    });
  };

  const tanslate = () => {
    revealHeading({
      elem: buttonFill,
      config: {
        width: [button.clientWidth, 20],
        height: [button.clientHeight, 4],
        translateY: [0, '-50%'],
        translateX: [0, -10],
        translateZ: 0,
        top: [0, '50%'],
        easing: 'spring(1, 40, 20, 9)',
      },
    });
  };

  button.addEventListener('mouseover', align);
  button.addEventListener('mouseleave', tanslate);
};
