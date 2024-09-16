import {database} from './fishData.js'


export const tipList = () => {
    let tips = "<ul class='tips'>"
    for (const tipEle of database.tips) {
        tips += `<li class="tip"> 
            <strong>${tipEle.topic}</strong> - ${tipEle.text}
            </li>`

    }

    tips += "</ul>"
    return tips
}