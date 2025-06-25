window.onload = function () {
  const shoppingList = document.getElementById("shopping-list");

  const items = ["Item A", "Item B", "Item C"];

  items.forEach(itemText => {
    const li = document.createElement("li");
    li.textContent = itemText;
    shoppingList.appendChild(li);
  });
};