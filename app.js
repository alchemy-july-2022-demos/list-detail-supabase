// import functions and grab DOM elements

import { getAnimals } from './fetch-utils.js';
import { renderListItem } from './render-utils.js';

// let state

// set event listeners
// get user input
// use user input to update state
// update DOM to reflect the new state

const main = document.querySelector('main');

async function loadData() {
    console.log('in loadData');
    const animals = await getAnimals();
    // loop through the list of animals
    for (let animal of animals) {
        const animalDiv = renderListItem(animal);
        main.append(animalDiv);
    }
    // call the render function for each animal
    // append the div to the page
}

loadData();
