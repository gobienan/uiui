import { revealHeading } from './helper';

const config = {
  translateZ: 0,
  translateX: ['-105%', '105%'],
};

export const reveal = async () => {
  const headline = document.querySelector('.uiui-headline.example-7');
  const parts = headline.textContent.split(' ');
  headline.innerHTML = parts
    .map((p) => `<span><span>${p}</span><span class="uiui-block"></span></span>`)
    .join(' ');
  const blocks = [...document.querySelectorAll('.example-7 .uiui-block')];
  for (const elem of blocks) {
    await revealHeading({ elem, config });
    elem.previousSibling.style.opacity = 1;
  }
};
