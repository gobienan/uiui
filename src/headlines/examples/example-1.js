import { revealHeading } from './helper';

const config = {
  translateY: ['100%', 0],
  translateZ: 0,
  opacity: [0, 1],
};

export const reveal = async () => {
  const headline = document.querySelector('.uiui-headline.example-1');
  const parts = headline.textContent.split(' ');
  headline.innerHTML = parts.map((p) => `<span>${p}</span>`).join(' ');

  for (const elem of headline.children) {
    await revealHeading({ elem, config });
  }
};

setTimeout(() => {
  const editor = document.querySelector('.editor');

  editor.innerHTML = `<iframe src="https://codesandbox.io/embed/silent-morning-qs5uw?fontsize=14&hidenavigation=1&theme=dark"
 style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
 title="silent-morning-qs5uw"
 allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
 sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>`;
}, 1000);
