const showWrapper = document.querySelector(".show-wrapper");
const pickedMovieInfo = document.querySelector(".picked-movie-info");

pickedMovieInfo.style.display = "none";

showWrapper.addEventListener("click", function () {
  if (pickedMovieInfo.style.display === "none") {
    pickedMovieInfo.style.display = "flex";
    showWrapper.classList.add("active");
  } else {
    pickedMovieInfo.style.display = "none";
    showWrapper.classList.remove("active");
  }
});
