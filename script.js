//your code here!
document.addEventListener("DOMContentLoaded", function() {
  const list = document.getElementById("infi-list");
  const listItemHeight = 50; // Height of each list item in pixels
  const windowHeight = window.innerHeight;

  // Function to add new list items
  function addItems() {
    for (let i = 0; i < 2; i++) {
      const listItem = document.createElement("li");
      listItem.textContent = "List Item " + (list.children.length + 1);
      list.appendChild(listItem);
    }
  }

  // Function to check if the user has reached the end of the list
  function checkScroll() {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;

    // If the user has scrolled to the bottom of the list
    if (scrollTop + windowHeight >= scrollHeight) {
      addItems(); // Add more list items
    }
  }

  // Add initial list items
  for (let i = 0; i < 10; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = "Item " + (i + 1);
    list.appendChild(listItem);
  }

  // Add event listener to window scroll
  window.addEventListener("scroll", checkScroll);
});

