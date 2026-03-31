const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const movieGrid = document.getElementById('movieGrid');

const API_KEY = '443147e8';
const BASE_URL = `https://www.omdbapi.com/?apikey=${API_KEY}&s=`;


async function fetchMovies(searchTerm) {
    try {
        const res = await fetch(BASE_URL + searchTerm);
        const data = await res.json();

        if (data.Response === "True") {
            showMovies(data.Search);
        } else {
            movieGrid.innerHTML = "No results found";
        }
    } catch (err) {
        movieGrid.innerHTML = "Error fetching data";
    }
}

function showMovies(movies) {
    movieGrid.innerHTML = "";

    movies.forEach(movie => {
        movieGrid.innerHTML += `
            <div>
                <img src="${movie.Poster}" width="150">
                <h3>${movie.Title}</h3>
                <p>${movie.Year}</p>
            </div>
        `;
    });
}

searchBtn.addEventListener('click', () => {
    const value = searchInput.value;
    fetchMovies(value);
});

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        fetchMovies(searchInput.value);
    }
});