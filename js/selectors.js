// Select all the elements in the document we need 

// Global stats about the project 
export let getTotalDollarsRaised = document.querySelector('#total-dollars-raised');
export let getTotalBackers = document.querySelector('#total-backers');
export let getDaysLeft = document.querySelector('#days-left');

// Pledges Emplacement Selectors
export let getPledgesContainer = document.querySelector('#pledge-options-container');
export let getPledgeTitles = document.getElementsByClassName('pledge-title');
export let getPledgeAmounts = document.getElementsByClassName('pledge-amount');
export let getPledgeTexts = document.getElementsByClassName('pledge-text');
export let getPledgeLeft = document.getElementsByClassName('pledge-numbers-left');
export let getPledgeHiddenDiv = document.getElementsByClassName('enter-pledge-container ');



// Buttons 
export let getButtonPopupOpener = document.querySelector('.popup-opener');
export let getCloseButtons = document.querySelector('.close-btn');
export let getContinueButtons = document.getElementsByClassName('continue');

// Form for pledge amount
export let forms = document.getElementsByTagName('form');
export let getAmountPledge = document.getElementsByClassName('pledge-amount-entered') // textfield


// Radio Buttons
export let getRadioButtons = document.querySelectorAll("input[type=radio]");

// DIV Selectors
export let getPopupDiv = document.querySelector('#popup-container');
export let getMainDiv = document.querySelector('#page-container');



