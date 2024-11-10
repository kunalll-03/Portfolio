// JavaScript to validate the contact form
function validateForm() {
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const formStatus = document.getElementById("formStatus");

    if (!email || !message) {
        formStatus.textContent = "Please fill out all fields.";
        formStatus.style.color = "red";
        return false;
    }

    formStatus.textContent = "Message sent successfully!";
    formStatus.style.color = "green";
    return false; // Prevent actual form submission for this demo
}
