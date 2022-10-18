var all = Array.from(document.querySelectorAll(".hamada img"));
var imgContainer = document.getElementById("boxContainer");
var imgitem = document.getElementById("boxItem");
var pree = document.getElementById("pre");
var next = document.getElementById("suffiex");
var closee = document.getElementById("close");
var currentIndex = 0;
console.log(all);

for (let i = 0; i < all.length; i++) {
  all[i].addEventListener("click", function (e) {
    console.log(e.target);
    var currentPostion = e.target.getAttribute("src");
    imgContainer.style.display = "flex";
    imgitem.style.backgroundImage = `url(${currentPostion})`;
    currentIndex = i;
  });
}

function nexxt() {
  currentIndex++;
  if (all.length == currentIndex) {
    currentIndex = 0;
  }
  var currentPostion = all[currentIndex].getAttribute("src");

  imgitem.style.backgroundImage = `url(${currentPostion})`;
}

next.addEventListener("click", nexxt);

function prrre() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = all.length - 1;
  }
  var currentPostion = all[currentIndex].getAttribute("src");

  imgitem.style.backgroundImage = `url(${currentPostion})`;
}

pree.addEventListener("click", prrre);

function esc() {
  imgContainer.style.display = "none";
}

closee.addEventListener("click", esc);

document.addEventListener("keydown", function (e) {
  if (e.code == "ArrowLeft") {
    prrre();
  } else if (e.code == "ArrowRight") {
    nexxt();
  } else if (e.code == "Escape") {
    esc();
  }
});

imgContainer.addEventListener("click", function (e) {
  if (this == e.target) {
    imgContainer.style.display = "none";
  }
});
