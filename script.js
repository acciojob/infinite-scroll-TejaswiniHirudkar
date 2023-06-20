//your code here!
const list = document.getElementById('infi-list');

list.addEventListener('scroll', function() {
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    addItems();
  }
});

// Function to add more list items
function addItems() {
  // Number of new items to add
  const itemsToAdd = 2;

  // Generate new list items and append them to the list
  for (let i = 1; i <= itemsToAdd; i++) {
    const newItem = document.createElement('li');
    newItem.textContent = 'Item ' + (list.childElementCount + i);
    list.appendChild(newItem);
  }
}
