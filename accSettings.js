document.getElementById("uploadbtn").addEventListener("click", function () {
  document.getElementById("upload").click();
});

const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function (event) {
  event.preventDefault();
  const menu = document.querySelector(".menu");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
});

let mediaBody = window.matchMedia("(max-width:768px)");

mediaBody.addEventListener("change", function () {
  let listMobile = document.querySelector(".menu");
  if (mediaBody.matches) {
    listMobile.style.display = "none";
  } else {
    listMobile.style.display = "block";
  }
});

document.querySelector("form").addEventListener("click", function (event) {
  event.preventDefault();
});
