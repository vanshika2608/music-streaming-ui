const progressBar = document.querySelector('input[type="range"]');

progressBar.addEventListener("input", function () {
  const percentage = (this.value / this.max) * 100 + "%";
  this.style.background = `linear-gradient(to right, #d7065d ${percentage}, #ccc ${percentage})`;
});
