const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (event) => {
  const yp = event.offsetY;
  const xp = event.offsetX;

  const spanEl = document.createElement("span");
  spanEl.style.left = xp + "px";
  spanEl.style.top = yp + "px";
  const size = Math.random() * 100;
  spanEl.style.width = size + "px";
  spanEl.style.height = size + "px";
  bodyEl.appendChild(spanEl);

  setTimeout(() => {
    spanEl.remove();
  }, 6000);
});
