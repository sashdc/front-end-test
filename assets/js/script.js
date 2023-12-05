
// Create a button element
const addButton = document.createElement('button');
addButton.textContent = 'ADD';

// Add event listener to the button
addButton.addEventListener('click', function() {
    // Get the user input for h3, p, and image
    const h3Input = prompt('Enter the text for card heading:');
    const pInput = prompt('Enter the text for card content');
    const imageInput = prompt('Enter the URL of the image:');

    // Create a new card element
    const newCard = document.createElement('div');
    newCard.classList.add('card');

    // Create h3 and p elements with user input
    const h3Element = document.createElement('h3');
    h3Element.textContent = h3Input;
    const pElement = document.createElement('p');
    pElement.textContent = pInput;

    // Create an image element with user input
    const imageElement = document.createElement('img');
    imageElement.src = imageInput;
    // make image small
    imageElement.style.width = '200px';
    // imageElement.style.height = '200px';
    imageElement.style.borderRadius = '20px';


    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'DELETE';

    // Create an edit button
    const editButton = document.createElement('button');
    editButton.textContent = 'EDIT';
    editButton.classList.add('edit-btn');

    // Add event listener to the edit button
    editButton.addEventListener('click', function() {
        // Get the user input for h3, p, and image
        const editedH3Input = prompt('Enter the updated text for card heading:', h3Element.textContent);
        const editedPInput = prompt('Enter the updated text for card content:', pElement.textContent);
        const editedImageInput = prompt('Enter the updated URL of the image:', imageElement.src);

        // Update the h3, p, and image elements with user input
        h3Element.textContent = editedH3Input;
        pElement.textContent = editedPInput;
        imageElement.src = editedImageInput;
    });

   
    deleteButton.classList.add('delete-btn');

    // Add event listener to the delete button
    deleteButton.addEventListener('click', function() {
        // Remove the card from the page
        newCard.remove();
    });

    // Append h3, p, image, and delete button elements to the new card
    newCard.appendChild(h3Element);
    newCard.appendChild(pElement);
    newCard.appendChild(imageElement);
    newCard.appendChild(deleteButton);
     // Append the edit button to the new card
     newCard.appendChild(editButton);

    // Append the new card to the page
    document.querySelector('.grid').appendChild(newCard);
});

// Create a container for the buttons
const buttonContainer = document.createElement('div');
buttonContainer.classList.add('button-container');

// Add the button to the container
buttonContainer.appendChild(addButton);

// Add the container to the top of the page
const body = document.querySelector('body');
body.insertBefore(buttonContainer, body.firstChild);

// Create a print button
const printButton = document.createElement('button');
printButton.textContent = 'PRINT';
printButton.addEventListener('click', function() {
    // Save the page as a JPEG
    document.print();
});

// Add the print button to the bottom of the page
buttonContainer.appendChild(printButton);


