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
  