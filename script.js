    const moviesByGenre = {
        "Action": [
            "Need.jpeg", // Need for Speed
            "Fast.jpeg", // Fast & Furious
            "John.jpeg"  // John Wick
    ],
        "Romance": [
            "Mr and Mrs.jpeg", // Mr & Mrs Smith
            "Notebook.jpeg", // The Notebook
            "La la land.jpeg"  // La La Land
        ],
        "Comedy": [
            "Cool.jpeg", // Cool Runnings
            "Hangover.jpeg", // The Hangover
            "Step.jpeg"  // Step Brothers
        ],
        "Drama": [
            "Bad Boys.jpeg", // Bad Boys
            "Jeff.jpeg", // Pursuit of Happyness
            "Shawshank.jpeg"  // Shawshank
        ],
        "Horror": [
            "Sream.jpeg", // Scream
            "Sixth sense.jpeg", // The Conjuring
            "Silence of lambs.jpeg"  // It
        ]
    };
// ...existing code...

// Helper to check if a string is an image URL
function isImageUrl(str) {
    return str.startsWith('http');
}

function showMovies(genre) {
    const movieRow = document.getElementById('movieRow');
    movieRow.innerHTML = '';
    const movies = moviesByGenre[genre] || [];
    movies.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = genre + ' movie';
        img.style.width = '150px';
        img.style.margin = '10px';
        movieRow.appendChild(img);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const genreItems = document.querySelectorAll('.genres li');
    genreItems.forEach(item => {
        item.addEventListener('click', function() {
            showMovies(item.getAttribute('data-genre'));
        });
    });
    // Optionally show movies for the first genre on load
    showMovies(genreItems[0].getAttribute('data-genre'));
});
