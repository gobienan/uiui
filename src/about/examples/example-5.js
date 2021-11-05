import { revealHeading } from "./helper";

const config = {
  opacity: [0, 1],
  translateY: [40, 0],
  translateZ: 0,
  easing: "spring(1, 50, 8, 1)",
};

export const reveal = async () => {
  const headline = document.querySelector(".uiui-headline.example-5");
  revealHeading({ elem: headline, config });
};
