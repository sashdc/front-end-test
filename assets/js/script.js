
// Create a button element
const addButton = document.createElement('button');
addButton.textContent = 'ADD';

// Add event listener to the button
addButton.addEventListener('click', function() {
    // Get the user input for h3 and p
    const h3Input = prompt('Enter the text for card heading:');
    const pInput = prompt('Enter the text for card content');

    // Create a new card element
    const newCard = document.createElement('div');
    newCard.classList.add('card');

    // Create h3 and p elements with user input
    const h3Element = document.createElement('h3');
    h3Element.textContent = h3Input;
    const pElement = document.createElement('p');
    pElement.textContent = pInput;

    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'DELETE';
    deleteButton.classList.add('delete-btn');

    // Add event listener to the delete button
    deleteButton.addEventListener('click', function() {
        // Remove the card from the page
        newCard.remove();
    });

    // Append h3, p, and delete button elements to the new card
    newCard.appendChild(h3Element);
    newCard.appendChild(pElement);
    newCard.appendChild(deleteButton);

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


// --------------------------
