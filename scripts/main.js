import { fishList } from './fishList.js'
import { tipList } from './tipList.js'
import { locationList } from './locationList.js'
import { mostHolyFish } from './holyFish.js'
import { soldierFish } from './holyFish.js'
import { regularFish } from './holyFish.js'

// Generate the fish list
const fishHTML = fishList()

// Generate the care tips
const tipHTML = tipList()

// Generate the location list
const locationHTML = locationList()

// Render each HTML string to the correct DOM element
const renderFishToDom = (fishHTML) => {

    const fishCards = document.getElementById("fishList")

    if (fishCards) {
        fishCards.innerHTML = fishHTML

    } else {
        console.error ("could not find element with id 'fishList")
    }
}
const renderTipsToDom = (tipHTML) => {
    const tip = document.getElementById("tipList")

    if(tip) {
        tip.innerHTML = tipHTML
    } else {
        console.error ("could not find element with id tipList")
    }
}
const renderLocationToDom = (locationHTML) => {
    const locationList = document.getElementById("locationList")

    if (locationList) {
        locationList.innerHTML = locationHTML
    } else{
        console.error ("could not find element with id locationList")
    }
}


renderFishToDom(fishHTML)

renderTipsToDom(tipHTML)

renderLocationToDom(locationHTML)

const holyFish = mostHolyFish()
const notSoHoly = soldierFish()
const notHoly = regularFish()

const renderHoly = document.getElementById("fishList")

renderHoly.innerHTML = `${holyFish}${notSoHoly}${notHoly}`