document.getElementById('about').querySelector('button').addEventListener('click', function() {
    alert("Let's connect! Click the 'Connect With Me' button on the LinkedIn Help page.");
  });
  
  document.getElementById("googleSearchForm").onsubmit = function() {
    var searchQuery = document.getElementById("searchInput").value.trim();
    if (searchQuery === "") {
      alert("Please enter a search query!");
      return false;
    }
  };
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    const sendMessageButton = document.querySelector('button[type="button"]');
    
    sendMessageButton.addEventListener('click', function() {
      alert('Your message has been sent! Thank you for reaching out.');
    });
  });
  