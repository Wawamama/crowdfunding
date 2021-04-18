import * as datas from './js/datas.js';
import * as selectors from './js/selectors.js';
import { initStats, loadPledges }from './js/functions.js';

initStats(datas.totalMoneyRaised, datas.totalBackers, datas.daysLeft);

loadPledges(datas.pledges)
