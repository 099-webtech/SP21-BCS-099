function submitForm() {
    // Add your form submission logic here
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Example: Display submitted data
    alert('Form submitted successfully');

    // Optionally, you can send the data to a server using AJAX

    // Clear the form
    document.getElementById('contactForm').reset();

    return false;
}
