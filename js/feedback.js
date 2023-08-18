
    // Define getStarsHTML function
    function getStarsHTML(rating) {
      const filledStars = '<i class="fas fa-star"></i>'.repeat(rating);
      const emptyStars = '<i class="far fa-star"></i>'.repeat(5 - rating);
      return `${filledStars}${emptyStars}`;
    }

    // Define getRandomFontAwesomeIconClass function
    function getRandomFontAwesomeIconClass() {
      const icons = [
        'fas fa-heart',
        'fas fa-smile',
        'fas fa-thumbs-up',
        'fas fa-check-circle',
        'fas fa-star'
      ];
      const randomIndex = Math.floor(Math.random() * icons.length);
      return icons[randomIndex];
    }

    $(document).ready(function() {
      // Initialize carousel
      

      // Load reviews from local storage on page load
      const savedReviews = localStorage.getItem('reviewCarousel');
      if (savedReviews) {
        $('#reviewCarousel .carousel-inner').html(savedReviews);
      }

      $('#reviewForm').submit(function(event) {
        event.preventDefault();

        // Get form values
        const reviewerName = $('#reviewerName').val();
        const reviewText = $('#reviewText').val();
        const rating = $('#rating').val();
        const iconClass = getRandomFontAwesomeIconClass();
        const starsHTML = getStarsHTML(rating);

        const reviewHTML = `
          <div class="carousel-item">
            <div class="card">
              <div class="card-body">
                <i class="${iconClass} reviewer-icon" alt="Reviewer Icon"></i>
                <h5 class="card-title">${reviewerName}</h5>
                <p class="card-text">${reviewText}</p>
                <p class="card-text">Rating: ${starsHTML}</p>
              </div>
            </div>
          </div>
         
        `;
        const newReview = $('#reviewCarousel .carousel-inner .carousel-item:last-child .card-title');
  newReview.text(reviewerName);
        // Append review to carousel
$('#reviewCarousel .carousel-inner').append(reviewHTML);

// Reset carousel interval and move to next review
if ($('#reviewCarousel .carousel-inner .carousel-item').length > 1) {
  $('#reviewCarousel').carousel('dispose');
  $('#reviewCarousel').carousel({ interval: 4000 });
  $('#reviewCarousel').carousel('next');
}


        // Save carousel HTML to local storage
        localStorage.setItem('reviewCarousel', $('#reviewCarousel .carousel-inner').html());

        // Update carousel interval and move to next review
        if ($('#reviewCarousel .carousel-inner .carousel-item').length > 1) {
          $('#reviewCarousel').carousel('dispose');
          $('#reviewCarousel').carousel({ interval: 4000 });
          $('#reviewCarousel').carousel('next');
        }
        
        // Clear form fields
        $('#reviewerName').val('');
        $('#reviewText').val('');
        $('#rating').val(1);
      });

      // Initial carousel activation
      $('#reviewCarousel .carousel-inner .carousel-item:first-child').addClass('active');
    });