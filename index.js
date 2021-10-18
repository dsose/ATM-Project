"use strict"

const atm = require("./atm");

const prompt = require("prompt-sync")({sigint: true});

const wallet = require ("./wallet");

const checkPin = prompt("Please enter your pin")
const userInput = prompt();
if(!atm.pinChecker === userInput) {
    console.log("Incorrect Pin. Please try again.");
}else{
    const mainMenu = prompt("Please choose from the following options '1' for balance. '2' for deposits. '3' for a withdrawal. Type 'quit' when finished.");
    switch(mainMenu) {
        case "1":
            console.log('your current balance is: ${atm.newBal}');
            break;
        case "2":
            let userdeposit = prompt('enter your deposit amount.')
            console.log(atm.atmdeposit(parseInt(userInput)));
        case "3":
            let userwithdraw = prompt('how much would you like to withdraw?')
            console.log(atm.atmwithdraw(userInput));
        case "exit":

        break;
    }
}
