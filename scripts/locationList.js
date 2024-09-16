import {database} from './fishData.js'


export const locationList = () => {
    let locationInfo = "<article class='locations'>"

    for (const location of database.location) {
        locationInfo += `<section class='location'>
            <strong>${location.name}:</strong> <br> Location - ${location.country} <br>
            <em id="locationDescription">${location.description}</em>
        
        </section>`
    }
    locationInfo += "</article>"
    return locationInfo
}