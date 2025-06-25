window.onload = function () {
  const oldParagraph = document.getElementById("old-paragraph");

  const newParagraph = document.createElement("p");
  newParagraph.textContent = "This paragraph was replaced!";

  oldParagraph.parentNode.replaceChild(newParagraph, oldParagraph);
};