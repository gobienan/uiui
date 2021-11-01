import Prism from 'prismjs';
import 'prismjs/themes/prism-dark.css';
import { CodeJar } from 'codejar';
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
  const jar = CodeJar(editor, Prism.highlightElement);
  jar.updateCode(`
  const headline = document.querySelector('.uiui-headline.example-1');
  const parts = headline.textContent.split(' ');
  headline.innerHTML = parts.map((p) => \`<span>\${p}</span>\`).join(' ');
  
  for (const elem of headline.children) {
    await revealHeading({ elem, config });
  }
  `);
}, 1000);
