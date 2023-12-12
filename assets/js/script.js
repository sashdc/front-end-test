// Retrieve data from local storage and parse it as JSON
const savedCards = JSON.parse(localStorage.getItem("cards")) || [];
console.log(savedCards);

// Function to save cards to local storage
function saveCardsToLocalStorage() {
    localStorage.setItem("cards", JSON.stringify(savedCards));
}

// Function to create a new card element
function createCard(h3Input, pInput, imageInput) {
    const newCard = document.createElement("div");
    newCard.classList.add("card", "animate__animated", "animate__rubberBand");

    const h3Element = document.createElement("h3");
    h3Element.textContent = h3Input;

    const pElement = document.createElement("p");
    pElement.textContent = pInput;

    const imageElement = document.createElement("img");
    imageElement.src = imageInput;
    imageElement.classList.add("img");

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");
    buttonContainer.style.display = "flex";
    buttonContainer.style.justifyContent = "space-between";

    const dltButton = createButton("fa-trash", "delete-btn");
    const editButton = createButton("fa-edit", "edit-btn");

    editButton.addEventListener("click", function () {
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

        h3Element.textContent = editedH3Input;
        pElement.textContent = editedPInput;
        imageElement.src = editedImageInput;
    });

    dltButton.addEventListener("click", function () {
        const confirmDelete = confirm("Are you sure you want to delete this card?");
        if (confirmDelete) {
            newCard.remove();
            const index = savedCards.findIndex((card) => card.h3 === h3Input);
            savedCards.splice(index, 1);
            saveCardsToLocalStorage();
        }
    });

    newCard.appendChild(h3Element);
    newCard.appendChild(pElement);
    newCard.appendChild(imageElement);
    newCard.appendChild(buttonContainer);
    buttonContainer.appendChild(dltButton);
    buttonContainer.appendChild(editButton);

    return newCard;
}

// Function to create a button element
function createButton(iconClass, buttonClass) {
    const button = document.createElement("i");
    button.classList.add("fa", iconClass, buttonClass, "btn");
    return button;
}

// Function to handle click event on image element
function handleImageClick(imageElement) {
    imageElement.classList.toggle("img-active");
    console.log("clicked");
}

// Loop through the saved cards
for (let i = 0; i < savedCards.length; i++) {
    const { h3, p, image } = savedCards[i];
    const newCard = createCard(h3, p, image);

    newCard.querySelector("img").addEventListener("click", function () {
        handleImageClick(this);
    });

    document.querySelector(".grid").appendChild(newCard);
}

// Function to handle click event on add button
function handleAddButtonClick() {
    const h3Input = prompt("Enter the card heading:");
    const pInput = prompt("Enter the card content");
    const imageInput = prompt("Enter the URL of the image:");

    const newCard = createCard(h3Input, pInput, imageInput);
    newCard.querySelector("img").addEventListener("click", function () {
        handleImageClick(this);
    });

    savedCards.push({
        id: `card-${Date.now()}`,
        h3: h3Input,
        p: pInput,
        image: imageInput,
    });

    saveCardsToLocalStorage();
    document.querySelector(".grid").appendChild(newCard);
}

// Create a button element
const addButton = createButton("fa-plus", "add-btn");
addButton.addEventListener("click", handleAddButtonClick);

// Create a container for the buttons
const btnContainer = document.createElement("div");
btnContainer.classList.add("button-container");
btnContainer.appendChild(addButton);

// Add the container to the top of the page
const body = document.querySelector("body");
body.insertBefore(btnContainer, body.firstChild);
