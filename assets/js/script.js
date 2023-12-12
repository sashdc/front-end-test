// Retrieve data from local storage and parse it as JSON
const savedCards = JSON.parse(localStorage.getItem("cards")) || [];
console.log(savedCards);


// Function to save cards to local storage
function saveCardsToLocalStorage() {
  localStorage.setItem("cards", JSON.stringify(savedCards));
}

// Loop through the saved cards
for (let i = 0; i < savedCards.length; i++) {
  // Create a new card element
  const newCard = document.createElement("div");
  newCard.classList.add("card");
  // add animate.css class to the new card
  newCard.classList.add("animate__animated");
  newCard.classList.add("animate__rubberBand");

  // Create h3 and p elements with user input
  const h3Element = document.createElement("h3");
  h3Element.textContent = savedCards[i].h3;
  const pElement = document.createElement("p");
  pElement.textContent = savedCards[i].p;

  // Create an image element with user input
  const imageElement = document.createElement("img");
  imageElement.src = savedCards[i].image;
  imageElement.classList.add("img");

  // Create a container for the buttons
  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("button-container");
  buttonContainer.style.display = "flex";
  buttonContainer.style.justifyContent = "space-between";

  // create delete button using font awesome icon
  const dltButton = document.createElement("i");
  dltButton.classList.add("fa", "fa-trash", "delete-btn", "btn");

  // create edit button using font awesome icon
  const editButton = document.createElement("i");
  editButton.classList.add("fa", "fa-edit", "edit-btn", "btn");

  // Add event listener to the edit button
  editButton.addEventListener("click", function () {
    // Get the user input for h3, p, and image
    const editedH3Input = prompt(
      "Enter the updated text for card heading:",
      h3Element.textContent
    );
    const editedPInput = prompt(
      "Enter the updated text for card content:",
      pElement.textContent
    );
    const editedImageInput = prompt(
      "Enter the updated URL of the image:",
      imageElement.src
    );

    // Update the h3, p, and image elements with user input
    h3Element.textContent = editedH3Input;
    pElement.textContent = editedPInput;
    imageElement.src = editedImageInput;
  });

  // Add event listener to the delete button
  dltButton.addEventListener("click", function () {
    // Remove the card from the page
    // add prompt to confirm delete
    const confirmDelete = confirm("Are you sure you want to delete this card?");
    if (confirmDelete) newCard.remove();
    // update local storage to reflect deletion
    savedCards.splice(i, 1);
    saveCardsToLocalStorage();
    // refresh page to reflect deletion
    // location.reload();
    //
  });

  newCard.appendChild(h3Element);
  newCard.appendChild(pElement);
  newCard.appendChild(imageElement);
  newCard.appendChild(buttonContainer);
  buttonContainer.appendChild(dltButton);
  // Append the edit button to the new card
  buttonContainer.appendChild(editButton);
  document.querySelector(".grid").appendChild(newCard);

  console.log(h3Element.textContent);
}

// Create a button element
const addButton = document.createElement("button");
addButton.classList.add("add-btn");
addButton.textContent = "+";

// Add event listener to the button
addButton.addEventListener("click", function () {
  // Get the user input for h3, p, and image
  const h3Input = prompt("Enter the card heading:");
  const pInput = prompt("Enter the card content");
  const imageInput = prompt("Enter the URL of the image:");

  // Create a new card element
  const newCard = document.createElement("div");
  newCard.classList.add("card");
  // add animate.css class to the new card
  newCard.classList.add("animate__animated","animate__rubberBand");
//   newCard.classList.add("animate__rubberBand");

  // Create h3 and p elements with user input
  const h3Element = document.createElement("h3");
  h3Element.textContent = h3Input;
  const pElement = document.createElement("p");
  pElement.textContent = pInput;

  // Create an image element with user input
  const imageElement = document.createElement("img");
  imageElement.src = imageInput;
//   imageElement.style.margin = "10px";
  //  make it so clicking image keeps it active until clicked away
  imageElement.addEventListener("click", function () {
    // Add the active class to the image
    imageElement.classList.toggle("img-active");
  });

  // create unique id to save to local storage
  const cardId = `card-${Date.now()}`;
  newCard.id = cardId;
  // save data to local storage
  savedCards.push({
    id: cardId,
    h3: h3Input,
    p: pInput,
    image: imageInput,
  });

  // Save the updated cards to local storage
  saveCardsToLocalStorage();

  // make it so clicking anywhere else removes the acitve class from the iamge
  document.addEventListener("click", function (event) {
    // Check if the image is active
    if (imageElement.classList.contains("img-active")) {
      // Check if the click is on the image
      if (event.target === imageElement) return;
      // Remove the active class from the image
      else imageElement.classList.remove("img-active");
    }
  });

  const buttonContainer = document.createElement("div");
buttonContainer.classList.add("button-container");
buttonContainer.style.display = "flex";
buttonContainer.style.justifyContent = "space-between";
   // create delete button using font awesome icon
   const dltButton = document.createElement('i');
   dltButton.classList.add('fa', 'fa-trash', 'delete-btn', 'btn');

   // create edit button using font awesome icon
   const editButton = document.createElement('i');
   editButton.classList.add('fa', 'fa-edit', 'edit-btn', 'btn');
  // Add event listener to the edit button
  editButton.addEventListener("click", function () {
    // Get the user input for h3, p, and image
    const editedH3Input = prompt(
      "Enter the updated text for card heading:",
      h3Element.textContent
    );
    const editedPInput = prompt(
      "Enter the updated text for card content:",
      pElement.textContent
    );
    const editedImageInput = prompt(
      "Enter the updated URL of the image:",
      imageElement.src
    );

    // Update the h3, p, and image elements with user input
    h3Element.textContent = editedH3Input;
    pElement.textContent = editedPInput;
    imageElement.src = editedImageInput;
  });

  // Add event listener to the delete button
  dltButton.addEventListener("click", function () {
    // Remove the card from the page
    // add prompt tpo confirm delete
    const confirmDelete = confirm("Are you sure?");
    if (confirmDelete) newCard.remove();
    // update local storage to reflect deletion
    savedCards.pop();
    // savedCards= savedCards.pop();
    saveCardsToLocalStorage();
     
  });

  // Append h3, p, image, and delete button elements to the new card
  newCard.appendChild(h3Element);
  newCard.appendChild(pElement);
  newCard.appendChild(imageElement);
  newCard.appendChild(buttonContainer);
// make it so dltButton and editButton are in the same container, and added to each card 
    buttonContainer.appendChild(dltButton);
    // Append the edit button to the new card
    buttonContainer.appendChild(editButton);


  // Append the new card to the page
  document.querySelector(".grid").appendChild(newCard);
//   document.reload();
});
// end of add button event listener

// Create a container for the buttons
const btnContainer = document.createElement("div");
btnContainer.classList.add("button-container");

// Add the button to the container
btnContainer.appendChild(addButton);

// Add the container to the top of the page
const body = document.querySelector("body");
body.insertBefore(btnContainer, body.firstChild);
