import { animate } from './helper';

const config = {
  translateY: [10, 0],
  translateX: [10, 0],
  translateZ: 0,
  easing: 'spring(1, 80, 4, 5)',
};

export const reveal = async () => {
  const button = document.querySelector('.uiui-button.example-3');
  const buttonSpan = document.querySelector('.uiui-button.example-3 span');
  button.innerHTML = `<span>${buttonSpan.textContent}</span><span></span>`;

  const buttonFill = document.querySelector('.uiui-button.example-3 span:last-child');
  const align = () => {
    animate({
      elem: buttonFill,
      config,
    });
  };

  const translate = () => {
    animate({
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
  button.addEventListener('mouseleave', translate);
  setCode();
};

const setCode = () => {
  setTimeout(() => {
    const editor = document.querySelector('.editor iframe');
    const url =
      'https://codesandbox.io/embed/uiui-button-example-3-4zovu?fontsize=14&hidenavigation=1&theme=dark';
    editor.setAttribute('src', url);
  }, 1000);
};
