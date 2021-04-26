import * as datas from './js/datas.js';
import * as selectors from './js/selectors.js';
import { initStats, loadPledges, showPopup, closePopup, showHiddenPopupDiv, validatePledge} from './js/functions.js';

// NEEDED VARIABLES
let totalMoneyRaised = datas.INIT_DOLLARS;
let totalBackers = datas.INIT_BACKERS;
let daysLeft = datas.INIT_DAYS_LEFT;


initStats(totalMoneyRaised, totalBackers, daysLeft);
loadPledges(datas.pledges)

// Event Listeners

selectors.getButtonPopupOpener.addEventListener("click", showPopup);
selectors.getCloseButtons.addEventListener("click", closePopup);

for (let i=0; i<selectors.forms.length; i++) {
    selectors.forms[i].addEventListener('submit', event => {
        let money = selectors.getAmountPledge[i].value;
        updateBankroll(money);
        event.preventDefault(); 
        initStats(totalMoneyRaised, totalBackers, daysLeft);
    })
}

// Show hidden divs
showHiddenPopupDiv(selectors.getRadioButtons, selectors.getPledgeHiddenDiv);


// FUNCTIONS (not working from functions.js file fuck it)
const updateBankroll = (dollars) => {
    if (!isNaN(dollars)) {
        totalMoneyRaised += parseInt(dollars);
        totalBackers ++;
    } else {
        return 'We need a number here'
    }
}





