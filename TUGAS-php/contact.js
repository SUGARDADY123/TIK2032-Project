// contact.js

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the values from the form fields
    const fullName = document.querySelector('input[name="fullname"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea').value;

    // You can perform validation here if needed

    // Example: Log the values to the console
    console.log("Full Name:", fullName);
    console.log("Email:", email);
    console.log("Message:", message);

    // Here you can send the form data to your server using AJAX or other methods
}

// Add event listener to the form for form submission
// document.querySelector('form').addEventListener('submit', handleSubmit);