const myLibrary = [];

// Function to add a book to the library
function addBookToLibrary() {
  const textbox = document.getElementById("inputtextbox");
  const bookName = textbox.value.trim(); // Get the value and trim whitespace

  if (bookName) {
    // Add book object with read status
    myLibrary.push({ name: bookName, read: false });
    textbox.value = ""; // Clear the textbox
    alert(`"${bookName}" has been added to the library.`);
  } else {
    alert("Please enter a book name."); // Warn if the input is empty
  }
}

// Function to display the books in the library
function displayBooks() {
  const output = document.getElementById("displayBooks"); // Get the display area
  output.innerHTML = ""; // Clear any existing content

  if (myLibrary.length === 0) {
    output.textContent = "The library is empty."; // Show an empty message
  } else {
    myLibrary.forEach((book, index) => {
      // Create a book card
      const bookCard = document.createElement("div");
      bookCard.classList.add("book-card");

      // Add read class if the book is marked as read
      if (book.read) {
        bookCard.classList.add("read");
      }

      // Populate the card with book details and the "Mark as Read" button
      bookCard.innerHTML = `
        <p>${book.name}</p>
        <button class="read-button" data-index="${index}">
          ${book.read ? "Read" : "Mark as Read"}
        </button>
      `;

      output.appendChild(bookCard);
    });

    // Add event listeners to the "Mark as Read" buttons
    const readButtons = document.querySelectorAll(".read-button");
    readButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        const index = e.target.getAttribute("data-index");
        toggleReadStatus(index);
      });
    });
  }
}

// Function to toggle the read status of a book
function toggleReadStatus(index) {
  myLibrary[index].read = !myLibrary[index].read; // Toggle the read status
  displayBooks(); // Re-render the library
}

// Attach event listeners to the buttons
document.getElementById("addBookToLibrary").onclick = addBookToLibrary;
document.getElementById("DisplayBookName").onclick = displayBooks;

// Prevent the form from submitting if Enter is pressed
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission
});
