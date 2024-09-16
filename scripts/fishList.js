import { database } from './fishData.js';



//iterate through database
// get fish name and image
//add name and image to html string

export const fishList = () => {
    // Generate an HTML representation of each fish
    let listOfFish = " "

    for (const fish of database.fish) {
        listOfFish += `
        <article class = "fishCards">
            <img src = "${fish.image}" alt = "${fish.name} image" class="fishImage">
            <ul>
                <li>
                    <p class="fishName">${fish.name}</p>
                </li>
                <li>
                    <p class="fishSpecies">${fish.species}</p>
                </li>
                <li>
                    <p class ="fishLength">${fish.length} feet long</p>
                </li>
                <li>
                    <p class="fishLocation">${fish.location}</p>
                </li>
                <li>
                    <p class="fishDiet">${fish.diet}</p>
                </li>
                
            </ul>
        </article>`
    }
    return listOfFish
};