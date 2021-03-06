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
  const replayButtons = document.querySelectorAll('.uiui-replay');
  const handleReplay = (index) => {
    reveal[index + 1]();
  };

  const slides = document.querySelectorAll('.swiper-slide');
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2,
  };
  const slideObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        const slide = entry.target;
        const index = [...slide.parentNode.children].findIndex((e) => e.isEqualNode(slide));
        reveal[index + 1]();
        slideObserver.unobserve(slide);
      }
    });
  }, options);

  slides.forEach(function (image) {
    slideObserver.observe(image);
  });
  replayButtons.forEach((r, i) => {
    r.addEventListener('click', () => handleReplay(i));
  });
};

const render = () => {
  document.querySelector('#app').innerHTML = `
<div class="swiper mySwiper">
<div class="swiper-wrapper">
<div class="swiper-slide">
  <button class="uiui-button uiui-button--glow example-1">Gloow</button>

<div class="uiui-toolbar">
<span class="uiui-code">Code</span>
<span class="uiui-replay">replay</span>
</div>
</div>
<div class="swiper-slide">
  <button class="uiui-button uiui-button--swap example-2" data-back="Tune In Now!"><span>Try Our Podcast ????</span></button>

<div class="uiui-toolbar">
<span class="uiui-code">Code</span>
<span class="uiui-replay">replay</span>
</div>
</div>
<div class="swiper-slide">
  <button class="uiui-button uiui-button--fill example-3"><span>Try Our Project</span></button>

<div class="uiui-toolbar">
<span class="uiui-code">Code</span>
<span class="uiui-replay">replay</span>
</div>
</div>
<div class="swiper-slide">
  <button class="uiui-button uiui-button--goo example-4"><span>goooooey</span></button>

<div class="uiui-toolbar">
<span class="uiui-code">Code</span>
<span class="uiui-replay">replay</span>
</div>
</div>
<div class="swiper-slide">
  <button class="uiui-button example-5">
    <span>Try Our Product</span>
  </button>

<div class="uiui-toolbar">
<span class="uiui-code">Code</span>
<span class="uiui-replay">replay</span>
</div>

</div>
<div class="swiper-slide">
  <button class="uiui-button example-6">
    <span>Join Us Today</span>
  </button>

<div class="uiui-toolbar">
<span class="uiui-code">Code</span>
<span class="uiui-replay">replay</span>
</div>

</div>
<div class="swiper-slide">
  <button class="uiui-button example-7" data-back="Hey there ????"><span>Swuuush</span></button>

<div class="uiui-toolbar">
<span class="uiui-code">Code</span>
<span class="uiui-replay">replay</span>
</div>
</div>
<div class="swiper-slide">
  <button class="uiui-button example-8">
  <span>Sign Up Today</span><span>????</span>
  </button>

<div class="uiui-toolbar">
<span class="uiui-code">Code</span>
<span class="uiui-replay">replay</span>
</div>

</div>
<div class="swiper-slide">
  <button class="uiui-button example-9">
     <span>Glitch ??????</span>
  </button>

<div class="uiui-toolbar">
<span class="uiui-code">Code</span>
<span class="uiui-replay">replay</span>
</div>

</div>
<div class="swiper-slide swiper-slide--last">
  <div>
    <span>Like It?</span>
      <h1 class="uiui-headline example-10 uiui-share">
      <span>Share</span> <span>on</span>
      <a
        target="_blank"
        href="https://twitter.com/intent/tweet?text=Check out uiui.dev by @gobienan ?????A collection of UI elements for developers"
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
    </div>
  </div>
</div>
</div>
`;
};
