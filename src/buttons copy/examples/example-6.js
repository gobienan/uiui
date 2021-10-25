import { revealHeading } from "./helper";

const config = {
  backgroundSize: [0, "100%"],
  translateZ: 0,
  easing: "spring(1, 20, 6, 3)",
};

export const reveal = async () => {
  const headline = document.querySelector(".uiui-headline.example-6 span");
  await revealHeading({ elem: headline, config });
};
