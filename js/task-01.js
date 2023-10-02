const list = document.querySelector("#categories");

const numberOfItems = list.children.length;
console.log(`Number of categories: ${numberOfItems}`);

const arrayOfItems = list.querySelectorAll(".item");

arrayOfItems.forEach((item) => {
  const title = item.firstElementChild.textContent;
  console.log(`Category: ${title}`);

  const number = item.lastElementChild.children.length;
  console.log(`Elements: ${number}`);
});
