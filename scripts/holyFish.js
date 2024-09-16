import { database } from "./fishData.js"
export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    let holyFish = " "

    for (const fish of database.fish) {
        
        if (fish.length % 3 === 0) {
            holyFish += `<article class = "fishCards">
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

    }

    return holyFish
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    let notSoHolyFish = " "

    for (const fish of database.fish) {
        if(fish.length % 5 === 0) {
            notSoHolyFish += `<article class = "fishCards">
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
    }
    return notSoHolyFish
}

export const regularFish = () => {
    // Any fish not a multiple of 3 or 5
    let notHoly = " "
    for (const fish of database.fish) {
        if(fish.length % 3 !== 0 && fish.length % 5 !== 0) {

        notHoly += `<article class = "fishCards">
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
            
    }
    return notHoly
}
