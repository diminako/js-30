const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const searched = [];

fetch(endpoint)
    .then((data) => data.json())
    // .then((data) => data.forEach((item) => searched.push(item)))
    .then((data) => searched.push(...data))


    const findMatches = (input, searched) => {
        return searched.filter(place => {
            const regex = new RegExp(input, 'gi');
            return place.city.match(regex) || place.state.match(regex);
        })
    } 