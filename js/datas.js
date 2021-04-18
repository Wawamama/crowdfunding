export let pledges = [
    {
        name: 'Bamboo Stand',
        pledge: 'Pledge for $25 or more',
        text: 'You get an ergonomic stand made of natural bamboo. You\'ve helped us launch our promotional campaign, and you\'ll be added toa special Backer member list.',
        left: 101
    },
    {
        name: 'Black Edition Stand',
        pledge: 'Pledge for $75 or more',
        text: 'You get a Black Special Edition computer stand and a personal thank you. You\'ll be added to our Backer member list. Shipping is included.',
        left: 64
    },
    {
        name: 'Mahogany Special Edition',
        pledge: 'Pledge for $200 or more',
        text: 'You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You\'ll be added to our Backer list. Shipping is included.',
        left: 0
    }
 
]

// INITIAL VALUES
const INIT_DOLLARS = 89914;
const INIT_BACKERS = 5007;
const INIT_DAYS_LEFT = 56;

// Define variables
export let totalMoneyRaised = INIT_DOLLARS;
export let totalBackers = INIT_BACKERS;
export let daysLeft = INIT_DAYS_LEFT;

