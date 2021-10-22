import { revealHeading } from './helper';

const config = {
  translateZ: 0,
  scaleX: [{ value: 0 }, { value: 1 }, { value: 0 }],
};

export const reveal = async () => {
  const headline = document.querySelector('.uiui-headline.example-7');
  const parts = headline.textContent.split(' ');
  headline.innerHTML = parts
    .map((p) => `<span><span>${p}</span><span class="uiui-block"></span></span>`)
    .join(' ');
  const blocks = [...document.querySelectorAll('.example-7 .uiui-block')];
  for (const elem of blocks) {
    revealHeading({ elem, config });
    setTimeout(() => {
      elem.previousSibling.style.opacity = 1;
    }, 600);
  }
};
