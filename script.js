// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
    // Get the social links container
    const socialLinks = document.querySelector(".social-links");
  
    // Add a class to the container on mouseover
    socialLinks.addEventListener("mouseover", function(e) {
      const target = e.target;
      if (target.tagName === "A") {
        const href = target.getAttribute("href");
        if (href.includes("facebook")) {
          socialLinks.classList.add("facebook-active");
        } else if (href.includes("whatsapp")) {
          socialLinks.classList.add("whatsapp-active");
        }
      }
    });
  
    // Remove the class from the container on mouseout
    socialLinks.addEventListener("mouseout", function(e) {
      const target = e.target;
      if (target.tagName === "A") {
        socialLinks.classList.remove("facebook-active");
        socialLinks.classList.remove("whatsapp-active");
      }
    });
  });
  