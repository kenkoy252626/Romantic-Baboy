
function goBack() {
window.history.back();
}
function navigate() {

window.location.href = 'index.html';
}
function incrementQuantity(inputId) {
   const input = document.getElementById(inputId);
   input.value = parseInt(input.value) + 1;
   updateSelectedItems(inputId);
}

function decrementQuantity(inputId) {
   const input = document.getElementById(inputId);
   const value = parseInt(input.value);
   if (value > 0) {
       input.value = value - 1;
       updateSelectedItems(inputId);
   }
}

function updateSelectedItems(inputId, productName, productImage) {
    const input = document.getElementById(inputId);
    const value = parseInt(input.value);
    const itemIndex = inputId.slice(-1); // Extracting the item index from inputId
 
    const listItem = document.createElement('li');
    listItem.textContent = productName + ': ' + value;
 
    const image = document.createElement('img');
    image.src = productImage;
    listItem.appendChild(image);
    
    const selectedItemsList = document.getElementById('selected-items-list');
    const existingListItem = document.querySelector(`#selected-items-list li[data-item-index="${itemIndex}"]`);
 
    if (value === 0 && existingListItem) {
        existingListItem.remove();
    } else if (value > 0 && existingListItem) {
        existingListItem.textContent = productName + ': ' + value;
    } else if (value > 0) {
        listItem.dataset.itemIndex = itemIndex; // Assigning data attribute for easy identification
        selectedItemsList.appendChild(listItem);
    }
 }
 

function placeOrder() {
   // Define an array to hold the prices of each item
   const itemPrices = [10, 15, 20, 20, 20, 20, 20, 20, 20]; // Assuming these are the prices of each item
   
   let total = 0;

   // Iterate through all items
   for (let i = 1; i <= itemPrices.length; i++) {
       const quantity = parseInt(document.getElementById('quantity' + i).value);
       total += quantity * itemPrices[i - 1]; // Multiply quantity with the corresponding item price
   }

   // Generate receipt
   const receiptItems = [];
   for (let i = 1; i <= itemPrices.length; i++) {
       const quantity = parseInt(document.getElementById('quantity' + i).value);
       if (quantity > 0) {
           receiptItems.push(`Product${i}: ${quantity}`);
       }
   }

   // Show receipt as an alert
   const receiptText = `Receipt:\n${receiptItems.join('\n')}\nTotal: $${total.toFixed(2)}`;
   alert(receiptText);
}




