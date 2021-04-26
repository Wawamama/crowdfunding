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

        selectors.getPledgeTitles[i+3].innerText = pledges[i].name;
        selectors.getPledgeAmounts[i+3].innerText = pledges[i].pledge;
        selectors.getPledgeTexts[i+3].innerText = pledges[i].text;
        selectors.getPledgeLeft[i+3].innerText = pledges[i].left;
        
        if (pledges[i].left<1) {
            selectors.getPledgeOptionDiv[i].classList.add('zero-left');
        }
    }
}

export const showPopup = () => {
    selectors.getMainDiv.classList.add('greyified');
    selectors.getPopupDiv.classList.remove('hidden');
    selectors.getPopupDiv.style.display = 'block';
}

export const closePopup = () => {
    selectors.getMainDiv.classList.remove('greyified');
    selectors.getPopupDiv.style.display = 'none';
    selectors.getSuccessDiv.style.display = 'none';
}

export const showHiddenPopupDiv = (radios, divs) => { // takes 2 arrays (all the radios and all the hidden divs)
    for (let i=0; i<radios.length; i++) {
        radios[i].onchange = function() {
            for (let j = 0; j<radios.length; j++) {
                if(radios[j].checked) {
                    divs[j-1].classList.remove('hidden');
                }
            }
        }
            
    }
}



export const validatePledge = (dollars, edition) => {
    for (let pledges in datas.pledges) {
        if (pledges.name === edition) {
            pledges.left --;
        }
    }
    updateBankroll(dollars);
    closePopup();
}

export const showSuccessBox = () => {
    selectors.getSuccessDiv.classList.remove('hidden');
    selectors.getPopupDiv.style.display = 'none';
}

export const getPercentage = (amount, total) => {
    return (amount / total)*100;
}