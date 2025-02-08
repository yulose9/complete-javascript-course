const colors = ["red", "blue", "green", "yellow", "orange", "purple"];

const h1 = document.querySelector("h1");

// Add a smooth transition to the h1 element
h1.style.transition = "color 1s";

const changeColor = function () {
  const randomColor = Math.trunc(Math.random() * colors.length);
  h1.style.color = colors[randomColor];
};

setInterval(changeColor, 1000); // 1000 milliseconds = 1 second

h1.addEventListener("mouseover", function () {
  h1.style.transition = "all 0.3s";
  h1.style.transform = "scale(1.2)";
});

h1.addEventListener("mouseout", function () {
  h1.style.transform = "scale(1)";
});
