import { revealHeading } from "./helper";

const config = {
  backgroundSize: [0, "100%"],
  translateZ: 0,
  easing: "spring(1, 580, 4, 4)",
};

export const reveal = async () => {
  const headline = document.querySelector(".uiui-headline.example-6 span");
  await revealHeading({ elem: headline, config });
};
