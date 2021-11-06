import { animate } from './helper';

export const reveal = async () => {
  const button = document.querySelector('.uiui-button.example-5');
  const buttonSpan = document.querySelector('.uiui-button.example-5 span');
  button.innerHTML = `<span>${buttonSpan.textContent}</span><span></span>`;

  const buttonFill = document.querySelector('.uiui-button.example-5 span:last-child');
  const align = () => {
    animate({
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

  const translate = () => {
    animate({
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
  button.addEventListener('mouseleave', translate);
  setCode();
};

const setCode = () => {
  setTimeout(() => {
    const editor = document.querySelector('.editor iframe');
    const url =
      'https://codesandbox.io/embed/uiui-button-example-5-q0qlg?fontsize=14&hidenavigation=1&theme=dark&codemirror=1';
    editor.setAttribute('src', url);
  }, 1000);
};
