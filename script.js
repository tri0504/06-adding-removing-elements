// Get the form and list elements from the HTML
const form = document.getElementById('form');
const input = document.getElementById('item-input');
const list = document.getElementById('list');

// Add an event listener for when the form is submitted
form.addEventListener('submit', function(event) {
  // Prevent the page from refreshing when the form is submitted
  event.preventDefault();

  // Get the text that the user typed in the input field
  const itemText = input.value;

  // Check if the input is not empty
  if (itemText.trim() !== '') {
    // Create a new list item element
    const listItem = document.createElement('li');

    // Create a span to hold the item text
    const itemTextSpan = document.createElement('span');
    itemTextSpan.textContent = itemText;

    // Create a delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.setAttribute('aria-label', 'Delete item');
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';

    // Add an event listener to the delete button
    deleteBtn.addEventListener('click', function() {
      // Remove the list item when the delete button is clicked
      listItem.remove();
    });

    // Add the text and delete button to the list item
    listItem.appendChild(itemTextSpan);
    listItem.appendChild(deleteBtn);

    // Add the list item to the list
    list.appendChild(listItem);

    // Clear the input field so it's ready for a new item
    input.value = '';
  }
});
