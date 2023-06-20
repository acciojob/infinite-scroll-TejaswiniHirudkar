//your code here!

// Get the list element
const list = document.getElementById('infi-list');

// Add event listener to detect scrolling
list.addEventListener('scroll', function() {
  // Check if the user has reached the end of the list
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    // User has reached the end, add more list items
    addMoreItems();
  }
});

// Function to add more list items
function addMoreItems() {
  // Number of new items to add
  const numItemsToAdd = 2;

  // Generate new list items and append them to the list
  for (let i = 1; i <= numItemsToAdd; i++) {
    const newItem = document.createElement('li');
    newItem.textContent = 'List Item ' + (list.childElementCount + i);
    list.appendChild(newItem);
  }
}
