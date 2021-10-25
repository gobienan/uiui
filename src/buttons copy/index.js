import Swiper from 'swiper/swiper-bundle';
import './styles.scss';
import { reveal as reveal1 } from './examples/example-1';
import { reveal as reveal2 } from './examples/example-2';
import { reveal as reveal3 } from './examples/example-3';
import { reveal as reveal4 } from './examples/example-4';
import { reveal as reveal5 } from './examples/example-5';
import { reveal as reveal6 } from './examples/example-6';
import { reveal as reveal7 } from './examples/example-7';
import { reveal as reveal8 } from './examples/example-8';
import { reveal as reveal9 } from './examples/example-9';
import { reveal as reveal10 } from './examples/example-10';

const reveal = {
  1: reveal1,
  2: reveal2,
  3: reveal3,
  4: reveal4,
  5: reveal5,
  6: reveal6,
  7: reveal7,
  8: reveal8,
  9: reveal9,
  10: reveal10,
};

export const init = () => {
  render();
  const replay = document.querySelector('.uiui-replay');
  let index = 10;
  const handleReplay = () => {
    reveal[index]();
  };
  replay.addEventListener('click', handleReplay);

  const swiper = new Swiper('.mySwiper', {
    grabCursor: true,
    effect: 'cards',
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    initialSlide: index - 1,
    on: {
      init: function ({ snapIndex }) {
        index = snapIndex + 1;
        reveal[snapIndex + 1]();
      },
    },
  });

  swiper.on('slideChange', function ({ snapIndex }) {
    index = snapIndex + 1;
    reveal[snapIndex + 1]();
  });
};

const render = () => {
  document.querySelector('#app').innerHTML = `
<div class="swiper mySwiper">
<div class="swiper-wrapper">
  <div class="swiper-slide">
    <h1 class="uiui-headline example-1">Your Amazing New SaaS</h1>
  </div>
  <div class="swiper-slide">
    <h1 class="uiui-headline example-2">Your Amazing New Podcast</h1>
  </div>
  <div class="swiper-slide">
    <h1 class="uiui-headline example-3">Your Amazing New Project</h1>
  </div>
  <div class="swiper-slide">
    <h1 class="uiui-headline example-4">Your Amazing New Solution</h1>
  </div>
  <div class="swiper-slide">
    <h1 class="uiui-headline uiui-gradient-copy example-5">
      <span>Your Amazing New Product</span>
    </h1>
  </div>
  <div class="swiper-slide">
    <h1 class="uiui-headline uiui-underline-copy example-6">
      Your <span class="uiui-highlight">Amazing</span> New Ebook
    </h1>
  </div>
  <div class="swiper-slide">
    <h1 class="uiui-headline example-7 uiui-blocks">Your Amazing New Headline</h1>
  </div>
  <div class="swiper-slide">
    <h1 class="uiui-headline example-8 uiui-layers">
      Your Amazing New <span class="uiui-highlight"><span>App</span></span>
    </h1>
  </div>
  <div class="swiper-slide">
    <h1 class="uiui-headline example-9 uiui-glitch">
      Your <span class="uiui-highlight"><span>Amazing</span></span> New Game
    </h1>
  </div>
  <div class="swiper-slide swiper-slide--last">
    <div>
      <span>Like It?</span>
      <h1 class="uiui-headline example-10 uiui-share">
        <span>Share</span> <span>on</span>
        <a
          target="_blank"
          href="https://twitter.com/intent/tweet?text=Check out uiui by @gobienan — A collection of UI elements for Makers"
          >Twitter
        </a>
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="twitter"
          class="svg-inline--fa fa-twitter fa-w-16"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
          ></path>
        </svg>
      </h1>
    </div>
  </div>
</div>
<!-- Swiper -->
<div class="swiper-pagination"></div>
<div class="swiper-button-next"></div>
<div class="swiper-button-prev"></div>
</div>
<span class="uiui-replay">replay</span>
`;
};
