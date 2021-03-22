// Link to a JSON including huge list of cities
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

// query selectors
const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

// empty array
const searched = [];

// fetch call to turn this json into useable array.
fetch(endpoint)
    .then((data) => data.json())
// .then((data) => data.forEach((item) => searched.push(item)))
    .then((data) => searched.push(...data));
    
//  Nifty Regexp to add commas to long numbers
const numberWithCommas = (e) => e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');


// 
const displayMatches = () => {
    const matchArray = findMatches(searchInput.value, searched)
    const html = matchArray.map(place => {
        const regex = new RegExp(searchInput.value, 'gi');
        const cityName = place.city.replace(regex, `<span class='highlight'>${searchInput.value}</span>`)
        const stateName = place.city.replace(regex, `<span class='highlight'>${searchInput.value}</span>`)
        return `
        <li>
            <span class="name">${cityName}, ${stateName}</span>
            <span class="population">${numberWithCommas(place.population)}</span>
        </li>
        `;
    }).join('');
    suggestions.innerHTML = html;
}

// 
const findMatches = (input, searched) => {
    return searched.filter(place => {
        const regex = new RegExp(input, 'gi');
        return place.city.match(regex) || place.state.match(regex);
    })
}

// Event listeners when a key is lifted up or the search input area is changed.
searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);