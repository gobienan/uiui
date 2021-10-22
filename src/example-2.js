import anime from "animejs";

const reveal = async () => {
  const headline = document.querySelector(".uiui.example-2");
  const parts = headline.textContent.split(" ");
  headline.innerHTML = parts.map((p) => `<span>${p}</span>`).join(" ");
  for (const child of headline.children) {
    await revealHeading(child, 10);
  }
};

const revealHeading = (elem, delay) => {
  elem.classList.add("Revealed");
  return new Promise((resolve) => {
    anime({
      delay,
      targets: elem,
      translateY: ["100%", 0],
      translateX: [20, 0],
      translateZ: 0,
      easing: "spring(1, 60, 15, 3)",
      update: (a) => {
        a.progress > 10 && resolve(elem);
      }
    });
  });
};

reveal();
