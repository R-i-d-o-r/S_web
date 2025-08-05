console.log("Hello, World!");

const hambugerBtn = document.getElementById("nburger");

hambugerBtn.addEventListener("click", () => {
  const backDrop = document.querySelector(".backDrop");
  backDrop.style.display = "flex";
console.log("Hamburger button clicked");
});
caches
const closeBtn = document.getElementById("cancel");

closeBtn.addEventListener("click", () => {
  const backDrop = document.querySelector(".backDrop");
  backDrop.style.display = "none";
  console.log("Close button clicked");
});
