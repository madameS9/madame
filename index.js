// Function to display a personalized greeting
function displayGreeting() {
    // Get the input value from the user
    var userName = document.getElementById("nameInput").value;
  
    // Display a greeting with the user's name
    if (userName.trim() !== "") {
      alert("Hello, " + userName + "! Welcome to this page.");
    } else {
      alert("Hello, stranger! Welcome to this page.");
    }
  }
  
  // Create an input element for the user's name
  var nameInput = document.createElement("input");
  nameInput.id = "nameInput";
  nameInput.type = "text";
  nameInput.placeholder = "Enter your name";
  
  // Create a button element to trigger the greeting
  var greetButton = document.createElement("button");
  greetButton.textContent = "Greet Me";
  greetButton.onclick = displayGreeting;
  
  // Append the input and button to the body of the document
  document.body.appendChild(nameInput);
  document.body.appendChild(greetButton);
  