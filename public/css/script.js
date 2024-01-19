const fullScreenDiv = document.getElementById("activeDiv");
const hoverElement = document.querySelector(".hover-element");

hoverElement.addEventListener("mouseover", () => {
  // When hover element is hovered, show the full-screen div
  fullScreenDiv.style.display = "block";
});

hoverElement.addEventListener("mouseout", () => {
  // When hover element is not hovered, hide the full-screen div
  fullScreenDiv.style.display = "none";
});
