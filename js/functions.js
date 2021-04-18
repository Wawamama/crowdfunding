import * as selectors from './selectors.js';
import * as datas from './datas.js';

const addComma = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const initStats = (money, backers, days) => {
    selectors.getTotalDollarsRaised.innerText = `$ ${addComma(money)}`;
    selectors.getTotalBackers.innerText = addComma(backers);
    selectors.getDaysLeft.innerText = days;
}

export const loadPledges = (pledges) => { // takes an array of objects as argument
    for (let i=0; i<pledges.length; i++) {
        selectors.getPledgeTitles[i].innerText = pledges[i].name;
        selectors.getPledgeAmounts[i].innerText = pledges[i].pledge;
        selectors.getPledgeTexts[i].innerText = pledges[i].text;
        selectors.getPledgeLeft[i].innerText = pledges[i].left;
    }
}