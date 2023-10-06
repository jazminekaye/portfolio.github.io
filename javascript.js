function toggleMenu(){
    const menu= document.querySelector(".menu-links");
    const icon= document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
document.getElementById('submitBtn').addEventListener('click', function() {
    // Display the success message
    document.getElementById('success-message').style.display = 'block';

    // Hide the success message after 3 seconds (3000 milliseconds)
    setTimeout(function() {
        document.getElementById('success-message').style.display = 'none';
    }, 3000);
});
