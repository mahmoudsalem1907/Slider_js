// var h22 = document.querySelector(".hamada");
// // console.log(h2);

// h22.addEventListener("click", function () {
//   test();
// });
// function test() {
//   //   window.alert(`hahahahaa ${name}`);

//   h22.style.backgroundColor = "red";
//   //   h22.className = "bg-danger p-3";
//   console.log("hahahhaha");
// }

var h22 = document.querySelector(".hamada");

document.addEventListener("mousemove", function (e) {
  h22.style.top = e.clientY + "px";
  h22.style.left = e.clientX + "px";
  console.log("done");
});
