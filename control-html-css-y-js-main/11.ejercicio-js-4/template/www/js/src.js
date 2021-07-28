'use strict';

let names = [
    'A-Jay',
    'Manuel',
    'Manuel',
    'Eddie',
    'A-Jay',
    'Su',
    'Reean',
    'Manuel',
    'A-Jay',
    'Zacharie',
    'Zacharie',
    'Tyra',
    'Rishi',
    'Arun',
    'Kenton',
];


const result = names.reduce((acc,item)=>{
    if(!acc.includes(item)){
        acc.push(item);
    }
    return acc;
},[])
console.log(result);
