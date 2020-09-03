let controlSlider1 = document.getElementById("c1");
let controlSlider2 = document.getElementById("c2");
let controlSlider3 = document.getElementById("c3");

let photoThumbs = document.getElementsByClassName("image-thumb");
let videoThumbs = document.getElementsByClassName("video-thumb");
let modal = document.getElementById("modal");
let modalOverlay = document.getElementsByClassName("modal-overlay")[0];
let modalClose = document.getElementById("modal-close");
let modalConentContainer = document.getElementsByClassName(
  "modal-content-container"
)[0];
let nextModalBtn = document.getElementById("modal-next");
let prevModalBtn = document.getElementById("modal-prev");

let menu = document.getElementById("menu");
let navDiv = document.getElementById("nav-div-res");

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
  if (info.displayIndex === 1) {
    controlSlider1.innerHTML = `<img src="img/button-act.png" alt="btn-act">`;
    controlSlider2.innerHTML = `<img src="img/button.png" alt="btn">`;
    controlSlider3.innerHTML = `<img src="img/button.png" alt="btn">`;
  } else if (info.displayIndex === 2) {
    controlSlider1.innerHTML = `<img src="img/button.png" alt="btn">`;
    controlSlider2.innerHTML = `<img src="img/button-act.png" alt="btn-act">`;
    controlSlider3.innerHTML = `<img src="img/button.png" alt="btn">`;
  } else if (info.displayIndex === 3) {
    controlSlider1.innerHTML = `<img src="img/button.png" alt="btn">`;
    controlSlider2.innerHTML = `<img src="img/button.png" alt="btn">`;
    controlSlider3.innerHTML = `<img src="img/button-act.png" alt="btn-act">`;
  }
};

slider.events.on("indexChanged", onSlideChange);

let thumbName = "video";
let thumbId = 1;

let photosArray = [
  "img/full-photo.png",
  "img/full-photo2.jpeg",
  "img/full-photo3.jpg",
  "img/full-photo4.jpeg",
];

let videosArray = [
  "https://www.youtube.com/embed/Qj2seyOEKG0",
  "https://www.youtube.com/embed/n79aphwhpW0",
  "https://www.youtube.com/embed/xGlT1htGbHM",
  "https://www.youtube.com/embed/YOlUqfWrGls",
];

function closeModal() {
  modal.style.display = "none";
}

modalClose.onclick = closeModal;
modalOverlay.onclick = closeModal;

for (const thumb of photoThumbs) {
  thumb.onclick = function () {
    photoID = this.getAttribute("data-photo-id");
    thumbId = parseInt(photoID);
    thumbName = "photo";
    modal.style.display = "flex";
    modalConentContainer.innerHTML = `<h4>THE TITLE FOR IMAGE ${
      thumbId + 1
    }</h4>
    <img src="${photosArray[thumbId]}" alt="image">`;
  };
}

for (const thumb of videoThumbs) {
  thumb.onclick = function () {
    videoID = this.getAttribute("data-video-id");
    thumbId = parseInt(videoID);
    thumbName = "video";
    modal.style.display = "flex";
    modalConentContainer.innerHTML = `<h4>THE TITLE FOR VIDEO ${
      thumbId + 1
    }</h4>
    <iframe width="420" height="315"
      src="${videosArray[thumbId]}">
    </iframe>`;
  };
}

nextModalBtn.onclick = function () {
  if (thumbName === "photo") {
    thumbId++;
    if (thumbId === 4) {
      thumbId = 0;
    }
    modalConentContainer.innerHTML = `<h4>THE TITLE FOR IMAGE ${
      (thumbId % 4) + 1
    }</h4>
    <img src="${photosArray[thumbId % 4]}" alt="image">`;
  }
  if (thumbName === "video") {
    thumbId++;
    if (thumbId === 4) {
      thumbId = 0;
    }
    modalConentContainer.innerHTML = `<h4>THE TITLE FOR VIDEO ${
      (thumbId % 4) + 1
    }</h4>
    <iframe width="420" height="315"
      src="${videosArray[thumbId]}">
    </iframe>`;
  }
};

prevModalBtn.onclick = function () {
  if (thumbName === "photo") {
    thumbId--;
    if (thumbId === -1) {
      thumbId = 3;
    }
    modalConentContainer.innerHTML = `<h4>THE TITLE FOR IMAGE ${
      (thumbId % 4) + 1
    }</h4>
    <img src="${photosArray[thumbId % 4]}" alt="image">`;
  }
  if (thumbName === "video") {
    thumbId--;
    if (thumbId === -1) {
      thumbId = 3;
    }
    modalConentContainer.innerHTML = `<h4>THE TITLE FOR VIDEO ${
      (thumbId % 4) + 1
    }</h4>
    <iframe width="420" height="315"
      src="${videosArray[thumbId]}">
    </iframe>`;
  }
};

navDiv.style.right = "-100vw";
menu.onclick = function () {
  if (navDiv.style.right == "-100vw") {
    navDiv.style.right = "0px";
  } else if (navDiv.style.right == "0px") {
    navDiv.style.right = "-100vw";
  }
};
