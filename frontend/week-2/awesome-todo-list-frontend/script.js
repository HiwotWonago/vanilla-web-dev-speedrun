let form = document.querySelector("form");
let ul = document.querySelector("ul");

const items = [];

const renderList = () => {
  const listItems = items.map(
    (eachItem, index) =>
      `<li><p>${eachItem}</p><button data-index="${index}">X</button></li>`
  );
  const sanitizedItemsArray = listItems.join("");
  ul.innerHTML = sanitizedItemsArray;
};

const handleAddItem = (e) => {
  e.preventDefault();
  let inputData = document.querySelector("input").value;
  items.push(inputData);
  form.reset();
  renderList();
};

const handleRemoveItem = (e) => {
  if (e.target.tagName === "BUTTON") {
    const index = e.target.getAttribute("data-index");
    items.splice(index, 1);
    console.log(items);
    renderList();
  }
};

form.addEventListener("submit", handleAddItem);
ul.addEventListener("click", handleRemoveItem);
