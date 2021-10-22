import Swiper from "swiper";
import "./styles.css";
import "./example-1";

var swiper = new Swiper(".mySwiper", {
  grabCursor: true,
  effect: "cards",
  pagination: {
    el: ".swiper-pagination"
  }
});
swiper.on("slideChange", function () {
  console.log("slide changed");
});
