'use strict';

const url = 'https://rickandmortyapi.com/api/episode';

fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const air_date = data.results;
        console.log(air_date);
    });
