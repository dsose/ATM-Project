"use strict"

const account = require("./account");

function correctPin(userInput){
    if(userInput != account.pin){
        return false;
    }else if(userInput === account.pin){
        return true;
     }
}
let getBal = account.uBal












module.exports.pinChecker = correctPin;
module.exports.newBal = getBal
module.exports.atmwithdraw = getWithdrawal;
module.exports.atmdeposit = letDeposit;
