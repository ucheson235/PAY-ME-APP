const hamburger = document.querySelector(".hamburger");
let mediaBody = window.matchMedia("(max-width:768px)");

mediaBody.addEventListener("change", function () {
  let listMobile = document.querySelector("#listMobile");
  if (mediaBody.matches) {
    listMobile.style.display = "none";
  } else {
    listMobile.style.display = "block";
  }
});

hamburger.addEventListener("click", function (event) {
  event.preventDefault();
  if (listMobile.style.display === "block") {
    listMobile.style.display = "none";
  } else {
    listMobile.style.display = "block";
  }
});

const imgSearch = document.querySelector(".imgSearch");
document.querySelector("#searchInput").addEventListener("focus", function () {
  imgSearch.style.visibility = "hidden";
});
document.querySelector("#searchInput").addEventListener("blur", function () {
  imgSearch.style.visibility = "visible";
});
