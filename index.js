"use strict"

const atm = require("./atm");

const prompt = require("prompt-sync")({sigint: true});

const checkPin = prompt("Please enter your pin")
const userInput = prompt();