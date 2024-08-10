const ratingStars = document.querySelectorAll('.star');

ratingStars.forEach((star, index) => {
  star.addEventListener('click', () => {
    // Remove active class from all stars
    ratingStars.forEach((s) => s.classList.remove('active'));
    // Add active class to clicked star and previous stars
    for (let i = 0; i <= index; i++) {
      ratingStars[i].classList.add('active');
    }
    // Update rating value (optional)
    const ratingValue = index + 1;
    console.log(`Rated: ${ratingValue}/5`);
  });
});
