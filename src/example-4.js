import anime from "animejs";

const reveal = async () => {
  const headline = document.querySelector(".uiui.example-4");
  const parts = headline.innerHTML.split("<br>");
  headline.innerHTML = parts.map((p) => `<span>${p}</span>`).join(" ");
  for (const child of headline.children) {
    await revealHeading(child, 50);
  }
};

const revealHeading = (elem, delay = 0) => {
  return new Promise((resolve) => {
    anime({
      delay,
      targets: elem,
      opacity: [0, 1],
      scale: [0.85, 1],
      rotateX: [-50, 0],
      translateY: ["200%", 0],
      translateZ: 0,
      easing: "spring(1, 60, 30, 2)",
      update: (a) => {
        a.progress > 10 && resolve(elem);
      }
    });
  });
};

reveal();
