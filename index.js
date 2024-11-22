function loadRatingComments() {
  fetch('/api/ratings')  // Adjust the URL if using a full URL (e.g., if deployed on a live server)
    .then(response => response.json())
    .then(data => {
      let content = '';
      data.forEach(item => {
        content += `<p>Rating: ${item.rating} - Comment: ${item.comment}</p>`;
      });
      document.getElementById('comments-section').innerHTML = content;
    })
    .catch(error => console.error('Error loading comments:', error));
}

// Call the function when the page loads
window.onload = loadRatingComments;
