import * as datas from './js/datas.js';
import * as selectors from './js/selectors.js';
import { initStats, loadPledges, showPopup, closePopup, showHiddenPopupDiv }from './js/functions.js';

initStats(datas.totalMoneyRaised, datas.totalBackers, datas.daysLeft);

loadPledges(datas.pledges)

// Event Listeners
console.log(selectors.getPledgeTitles)
selectors.getButtonPopupOpener.addEventListener("click", showPopup);
selectors.getCloseButtons.addEventListener("click", closePopup);

// Show hidden divs
showHiddenPopupDiv(selectors.getRadioButtons, selectors.getPledgeHiddenDiv);

console.log(selectors.getRadioButtons)
console.log(selectors.getPledgeHiddenDiv)