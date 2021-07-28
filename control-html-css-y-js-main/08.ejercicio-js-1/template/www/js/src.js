'use strict';

const url = 'https://randomuser.me/api/';
const promise = fetch(url);

promise.then((data) => {
    console.log(data);
    const json = data.json();

    json.then((userData) => {

        
        console.log(userData.results[0].name);
        console.log(userData.results[0].gender);
        console.log(userData.results[0].email);
    })
});

