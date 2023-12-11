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
    // add animate.css class to the new card
    newCard.classList.add('animate__animated');

    newCard.classList.add('animate__rubberBand');


    // Create h3 and p elements with user input
    const h3Element = document.createElement('h3');
    h3Element.textContent = h3Input;
    const pElement = document.createElement('p');
    pElement.textContent = pInput;

    // Create an image element with user input
    const imageElement = document.createElement('img');
    imageElement.src = imageInput;
     imageElement.style.margin = '10px';
    //  make it so clicking image keeps it active until clicked away
    imageElement.addEventListener('click', function() {
        // Add the active class to the image
        imageElement.classList.toggle('img-active');
    }
    );
    // make it so clicking anywhere else removes the acitve class from the iamge
    document.addEventListener('click', function(event) {
        // Check if the image is active
        if (imageElement.classList.contains('img-active')) {
            // Check if the click is on the image
            if (event.target === imageElement)
                return;
            else
                // Remove the active class from the image
                imageElement.classList.remove('img-active');
        }
    }
    );


    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');	
    buttonContainer.style.display = 'flex';
    buttonContainer.style.justifyContent = 'space-between';

    // create delete button using font awesome icon
    const dltButton = document.createElement('i');
    dltButton.classList.add('fa');
    dltButton.classList.add('fa-trash');
    dltButton.classList.add('delete-btn')
    dltButton.classList.add('btn')

// create edit button using font awesome icon
    const editButton = document.createElement('i');
    editButton.classList.add('fa');
    editButton.classList.add('fa-edit');
    editButton.classList.add('edit-btn')
    editButton.classList.add('btn')



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

   

    // Add event listener to the delete button
    dltButton.addEventListener('click', function() {
        // Remove the card from the page
        // add prompt tpo confirm delete
        const confirmDelete = confirm('Are you sure you want to delete this card?');
        if (confirmDelete)
            newCard.remove();
        else
            return;
    });

    // Append h3, p, image, and delete button elements to the new card
    newCard.appendChild(h3Element);
    newCard.appendChild(pElement);
    newCard.appendChild(imageElement);
    newCard.appendChild(buttonContainer);

    buttonContainer.appendChild(dltButton);
     // Append the edit button to the new card
     buttonContainer.appendChild(editButton);

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


