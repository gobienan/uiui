import { revealHeading } from '../headlines/examples/helper';
import './styles.scss';

export const init = async () => {
  render();
  const config = {
    translateY: ['100%', 0],
    translateZ: 0,
  };
  setTimeout(async () => {
    const wrapper = document.querySelector('.is-about .uiui-headline');
    const parts = wrapper.textContent.split(' ');
    wrapper.innerHTML = parts.map((p) => `<span>${p}</span>`).join(' ');

    for (const elem of wrapper.children) {
      await revealHeading({ elem, config });
    }
    // const paragraphs = [...document.querySelectorAll('.is-about p')];
    // paragraphs.forEach(async (paragraph) => {
    //   const paragraphsParts = paragraph.textContent.split(' ');
    //   paragraph.innerHTML = paragraphsParts.map((p) => `<span><span>${p}</span></span>`).join(' ');
    //   for (const elem of [...paragraph.querySelectorAll('span span')]) {
    //     revealHeading({ elem, config });
    //   }
    // });
  }, 0);
};
const render = () => {
  document.querySelector('#app').innerHTML = `
<div class="swiper mySwiper">
<div class="swiper-wrapper">
  <div class="swiper-slide swiper-slide--last">
      <h1 class="uiui-headline">Hey, I’m Gobie 👋</h1>
      <br>
      <p>I created this collection for others to play around! This collection will grow naturally over time. <br> If you have a cool example I am happy to add it as well :)</p>          
      <br>
      <p>
      A little bit about me:
      <br>
      I love to code and to build stuff with real world applications. Bootstrapping products is my way. <br>
      <a href="https://twitter.com/gobienan" target="_blank" rel="noopener noreferrer">Follow</a> along if you would like 🥰<p/>
  </div>
</div>
</div>
`;
};
