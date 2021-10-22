import { revealHeading } from "./helper";

const config = {
  opacity: [0, 1],
  scale: [3, 1],
  rotateX: [-80, 0],
  translateY: [-100, 0],
  translateZ: 0,
};

export const reveal = async () => {
  const headline = document.querySelector(".uiui-headline.example-4");
  const parts = headline.textContent.split(" ");
  headline.innerHTML = parts.map((p) => `<span>${p}</span>`).join(" ");
  for (const elem of headline.children) {
    await revealHeading({ elem, config });
  }
};
