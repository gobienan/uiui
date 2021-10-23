import Swiper from '../node_modules/swiper/swiper-bundle';
import { reveal as reveal1 } from './example-1';
import { reveal as reveal2 } from './example-2';
import { reveal as reveal3 } from './example-3';
import { reveal as reveal4 } from './example-4';
import { reveal as reveal5 } from './example-5';
import { reveal as reveal6 } from './example-6';
import { reveal as reveal7 } from './example-7';
import { reveal as reveal8 } from './example-8';
import { reveal as reveal9 } from './example-9';

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
};

const replay = document.querySelector('.uiui-replay');
let index = 1;
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
  initialSlide: 8,
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
