import './styles.scss';

export const init = () => {
  render();
};
const render = () => {
  document.querySelector('#app').innerHTML = `
<div class="swiper mySwiper">
<div class="swiper-wrapper">
  <div class="swiper-slide swiper-slide--last">
    <div>
      <h1 class="uiui-headline example-10 uiui-share Revealed">
       About
      </h1>
      </div>
      <p>Hey, I am Gobie 👋<p/>
  </div>
</div>
`;
};
