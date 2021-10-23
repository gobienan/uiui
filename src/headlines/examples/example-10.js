import { revealHeading } from './helper';

const config = {
  translateY: ['100%', 0],
  translateZ: 0,
};

export const reveal = async () => {
  const elements = [...document.querySelectorAll('.uiui-headline.example-10 *')];
  for (const elem of elements) {
    revealHeading({ elem, config });
  }
};
