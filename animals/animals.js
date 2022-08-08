import { getAnimalById } from '../fetch-utils.js';
import { renderListItem } from '../render-utils.js';

console.log('hello from animals.js');

console.log(window.location);
const params = new URLSearchParams(window.location.search);
console.log(params.get('id'));
console.log(params.get('name'));

// get the id from the URLSearchParams
// we're going to use that id in our supabase query
// to get the info about the specific animal

const animalDetail = document.getElementById('animal-detail');
async function loadData() {
    const data = await getAnimalById(params.get('id'));
    const animalDiv = renderListItem(data);
    animalDetail.append(animalDiv);
}
loadData();
