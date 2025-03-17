// Slideshow Functionality
let currentIndex = 0;
const images = ["property1.jpg", "property2.jpg", "property3.jpg"]; 
const propertyImages = document.querySelectorAll(".property img");

function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    propertyImages.forEach((img, index) => {
        img.src = images[(currentIndex + index) % images.length];
    });
}

// Change image every 3 seconds
setInterval(changeImage, 3000);

// Hover Effect on Property Cards
document.querySelectorAll(".property").forEach(property => {
    property.addEventListener("mouseenter", () => {
        property.style.boxShadow = "0px 6px 15px rgba(0, 0, 0, 0.2)";
    });

    property.addEventListener("mouseleave", () => {
        property.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.1)";
    });
});

// CTA Click Event (Lead Collection)
document.querySelectorAll(".cta-button").forEach(button => {
    button.addEventListener("click", (event) => {
        event.preventDefault();
        alert("Thank you! Our agent will contact you soon.");
    });
});
