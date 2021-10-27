import { revealHeading } from './helper';

const config = {
  translateY: ['100%', 0],
  translateX: [-40, 0],
  translateZ: 0,
  opacity: [0, 1],
};

export const reveal = async () => {
  const button = document.querySelector('.uiui-button.example-6');
  const buttonSpan = document.querySelector('.uiui-button.example-6 span');
  button.innerHTML = `<span>${buttonSpan.textContent}</span><span></span>`;

  const buttonFill = document.querySelector('.uiui-button.example-6 span:last-child');
  const align = () => {
    revealHeading({
      elem: buttonFill,
      config: {
        width: [button.clientWidth - 100, button.clientWidth],
        height: [3, button.clientHeight],
        translateY: [-10, 0],
        translateX: ['-50%', '-50%'],
        translateZ: 0,
        easing: 'spring(1, 80, 16, 8)',
      },
    });
  };

  const tanslate = () => {
    revealHeading({
      elem: buttonFill,
      config: {
        width: [button.clientWidth, button.clientWidth - 100],
        height: [button.clientHeight, 3],
        translateX: ['-50%', '-50%'],
        translateY: [0, -10],
        translateZ: 0,
        easing: 'spring(1, 40, 20, 9)',
      },
    });
  };

  button.addEventListener('mouseover', align);
  button.addEventListener('mouseleave', tanslate);
};
