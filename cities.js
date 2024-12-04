const placesList = document.getElementById('places');
const cell = document.getElementById('cell');
const searchInput = document.getElementById('search');
let places = [];

fetch('./cities.json')
    .then(response => response.json())
    .then(data => {
        places = data;
        displayPlaces(places);
    });

function displayPlaces(places) {
    placesList.innerHTML = '';
    places.forEach(place => {
        const placeCell = cell.cloneNode(true);
        placeCell.querySelector('img').src = place.image;
        placeCell.querySelector('.card-title').textContent = place.city;
        placeCell.querySelectorAll('.card-text')[0].textContent = `Country: ${place.country}`;
        placeCell.querySelectorAll('.card-text')[1].textContent = `Date: ${place.date}`;
        placeCell.classList.remove('d-none');
        placesList.appendChild(placeCell);
    });
}

function sortByDate() {
    places.sort((a, b) => new Date(a.date) - new Date(b.date));
    displayPlaces(places);
}

function sortByCountry() {
    places.sort((a, b) => a.country.localeCompare(b.country));
    displayPlaces(places);
}

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredPlaces = places.filter(place =>
        place.city.toLowerCase().includes(searchTerm)
    );
    displayPlaces(filteredPlaces);
});
