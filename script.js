import * as datas from './js/datas.js';
import * as selectors from './js/selectors.js';
import { initStats, loadPledges, showPopup, closePopup, showHiddenPopupDiv, showSuccessBox} from './js/functions.js';

// NEEDED VARIABLES
let totalMoneyRaised = datas.INIT_DOLLARS;
let totalBackers = datas.INIT_BACKERS;
let daysLeft = datas.INIT_DAYS_LEFT;
let bookmarked = false;


initStats(totalMoneyRaised, totalBackers, daysLeft);
loadPledges(datas.pledges)

// EVENT LISTENERS

selectors.getButtonPopupOpener.addEventListener("click", showPopup);

for (let i=0; i<selectors.getSelectReward.length; i++) {
    selectors.getSelectReward[i].addEventListener("click", showPopup);
}

selectors.getCloseButtons.addEventListener("click", closePopup);
selectors.getGotItButton.addEventListener("click", closePopup);
selectors.getBookmarkDesktop.addEventListener("click", function() {
    if (selectors.getBookmarkDesktop.innerHTML === 'Bookmark') {
        selectors.getBookmarkDesktop.innerHTML = 'Bookmarked'
        selectors.getBookmarkDesktop.style.color = 'var(--green)'
        selectors.getBookmarkDesktop.style.backgroundColor = 'var(--lightgrey'
    } else if (selectors.getBookmarkDesktop.innerHTML === 'Bookmarked'){
        selectors.getBookmarkDesktop.innerHTML = 'Bookmark'
        selectors.getBookmarkDesktop.style.color = 'var(--darkgrey)'
    }
    
});

for (let i=0; i<selectors.forms.length; i++) { // events when pledge is entered
    selectors.forms[i].addEventListener('submit', event => {
        let money = selectors.getAmountPledge[i].value;

        if (money<datas.pledges[i].minpledge) {
            alert(`You have to pledge a minimum of ${datas.pledges[i].minpledge} $.`)
        } else {
            datas.pledges[i].left --;
            event.preventDefault(); 
            updateBankroll(money);
            initStats(totalMoneyRaised, totalBackers, daysLeft);
            loadPledges(datas.pledges)
            showSuccessBox();
        }  
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





