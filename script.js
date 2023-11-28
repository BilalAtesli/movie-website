// Slider
const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");
arrows.forEach((arrow, i) => {
  const widthRatio = Math.floor(window.innerWidth / 290);
  let clickCounter = 0;
  const imageItem = movieLists[i].querySelectorAll("img").length;
  arrow.addEventListener("click", function () {
    clickCounter++;
    if (imageItem - (5 + clickCounter) + (5 - widthRatio) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 290
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });
});

/ dark mode/;
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  "body, .container,.movie-container,.movie-list-filter,.container h1,nav, .nav-center ul li a,.sidebar,.sidebar i, .sidebar i:hover, .toogle,.toggle-ball, .movie-list-filter select, .movie-list-filter select option,.profile-text span,.profile-text i,.nav-center ul li a:hover"
);

ball.addEventListener("click", function () {
  items.forEach((item) => item.classList.toggle("active"));
});
