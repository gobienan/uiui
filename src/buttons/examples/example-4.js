import anime from 'animejs';

export const reveal = async () => {
  const button = document.querySelector('.uiui-button.example-4');
  const buttonSpan = document.querySelector('.uiui-button.example-4 span');

  const filter = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="goo">
  <defs>
    <filter id="goo">
      <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
      <feComposite in="SourceGraphic" in2="goo"/>
    </filter>
  </defs>
</svg>`;
  const blobs = `<div class="blobs">
<div class="blob top-left"></div>
<div class="blob bottom-right"></div></div>`;
  button.innerHTML = `<span>${buttonSpan.textContent}</span>${filter}${blobs}`;

  const hover = () => {
    const blobTopLeft = document.querySelector('.blob.top-left');

    anime
      .timeline()
      .add({
        targets: button,
        scale: [1, 1.05],
        translateZ: 0,
        easing: 'spring(2, 60, 30, 7)',
      })
      .add(
        {
          targets: button,
          scale: [1.05, 1],
          translateZ: 0,
          easing: 'spring(1, 50, 40, 3)',
        },
        '-=1200',
      );
    anime
      .timeline()
      .add({
        targets: blobTopLeft,
        translateY: [0, -15],
        translateX: [0, -15],
        scale: [1, 0.9],
        translateZ: 0,
        easing: 'spring(2, 60, 30, 7)',
      })
      .add(
        {
          targets: blobTopLeft,
          translateY: [-15, -40],
          translateX: [-15, -40],
          scale: [0.9, 0],
          translateZ: 0,
          easing: 'spring(1, 50, 40, 3)',
        },
        '-=1200',
      );

    const blobBottomRight = document.querySelector('.blob.bottom-right');
    anime
      .timeline()
      .add({
        targets: blobBottomRight,
        translateY: [0, 15],
        translateX: [0, 15],
        scale: [1, 0.9],
        translateZ: 0,
        easing: 'spring(2, 60, 30, 7)',
      })
      .add(
        {
          targets: blobBottomRight,
          translateY: [15, 40],
          translateX: [15, 40],
          scale: [0.9, 0],
          translateZ: 0,
          easing: 'spring(1, 50, 40, 3)',
          complete: revert,
        },
        '-=1200',
      );
  };
  const revert = () => {
    const blobTopLeft = document.querySelector('.blob.top-left');
    const blobBottomRight = document.querySelector('.blob.bottom-right');
    blobTopLeft.style.translateX = 0;
    blobTopLeft.style.translateY = 0;
    blobTopLeft.style.scale = 1;
    blobBottomRight.style.translateX = 0;
    blobBottomRight.style.translateY = 0;
    blobBottomRight.style.scale = 1;
  };

  button.addEventListener('click', hover);
  // setCode();
};

const setCode = () => {
  setTimeout(() => {
    if (window.innerWidth < 500) return;
    const editor = document.querySelector('.editor iframe');
    const url =
      'https://codesandbox.io/embed/uiui-button-example-4-llm1j?fontsize=14&hidenavigation=1&theme=dark&codemirror=1';
    editor.setAttribute('src', url);
  }, 1000);
};
