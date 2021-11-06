import { animate } from './helper';

export const reveal = async () => {
  const button = document.querySelector('.uiui-button.example-6');
  const buttonSpan = document.querySelector('.uiui-button.example-6 span');
  button.innerHTML = `<span>${buttonSpan.textContent}</span><span></span>`;

  const buttonFill = document.querySelector('.uiui-button.example-6 span:last-child');
  const align = () => {
    animate({
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

  const translate = () => {
    animate({
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
  button.addEventListener('mouseleave', translate);
  setCode();
};

const setCode = () => {
  setTimeout(() => {
    if (window.innerWidth < 500) return;
    const editor = document.querySelector('.editor iframe');
    const url =
      'https://codesandbox.io/embed/uiui-button-example-6-fpjdi?fontsize=14&hidenavigation=1&theme=dark&codemirror=1';
    editor.setAttribute('src', url);
  }, 1000);
};
