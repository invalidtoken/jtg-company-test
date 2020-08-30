let controlSlider1 = document.getElementById("c1");
let controlSlider2 = document.getElementById("c2");
let controlSlider3 = document.getElementById("c3");

let slider = tns({
  mode: "gallery",
  autoplay: true,
  controls: false,
  nav: true,
  autoplayTimeout: 3000,
  autoplayButtonOutput: false,
  navContainer: ".slider-controls",
  navAsThumbnails: true,
  startIndex: 0,
});

let onSlideChange = function (info, eventName) {
  console.log(info.displayIndex);
  if (info.displayIndex === 1) {
    controlSlider1.innerHTML = `<img src="/img/button-act.png" alt="btn-act">`;
    controlSlider2.innerHTML = `<img src="/img/button.png" alt="btn">`;
    controlSlider3.innerHTML = `<img src="/img/button.png" alt="btn">`;
  } else if (info.displayIndex === 2) {
    controlSlider1.innerHTML = `<img src="/img/button.png" alt="btn">`;
    controlSlider2.innerHTML = `<img src="/img/button-act.png" alt="btn-act">`;
    controlSlider3.innerHTML = `<img src="/img/button.png" alt="btn">`;
  } else if (info.displayIndex === 3) {
    controlSlider1.innerHTML = `<img src="/img/button.png" alt="btn">`;
    controlSlider2.innerHTML = `<img src="/img/button.png" alt="btn">`;
    controlSlider3.innerHTML = `<img src="/img/button-act.png" alt="btn-act">`;
  }
};

slider.events.on("indexChanged", onSlideChange);
