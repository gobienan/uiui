import anime from "animejs";

export const revealHeading = ({ elem, config }) => {
  return new Promise((resolve) => {
    anime({
      targets: elem,
      easing: "spring(1, 60, 15, 3)",
      ...config,

      update: (a) => {
        a.progress > 10 && resolve(elem);
        elem.classList.add("Revealed");
      },
    });
  });
};
