// dependency for inquirer npm package
var inquirer = require("inquirer");
// dependency for constructors for the 2 card types
var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");

var basicCards = [];
var clozeCards = [];


function addBasicCard(front, back) {
    basicCards.push(new BasicCard(front, back))
}

function addClozeCard(text, cloze) {
    clozeCards.push(new ClozeCard(text, cloze))
}

promptForCard();

function promptForCard() {
        inquirer.prompt([
            {
                type: "confirm",
                name: "keepAdding",
                message: "Do you want to add flash cards?",
                default: false
            }
        ]).then(function (answers) {
            if (answers.keepAdding) {

                inquirer.prompt([
                    {
                        type: "list",
                        message: "Choose type of card:",
                        choices: ["Basic Card", "Cloze Card"],
                        name: "cardType"
                    }
                ]).then(function (answers) {
                    if (answers.cardType === "Basic Card") {
                        inquirer.prompt([
                            {
                                name: "front",
                                message: "What is on the front of the basic card?"
                            }, {
                                name: "back",
                                message: "What is on the back of the basic card?"
                            }
                        ]).then(function (answers) {
                            addBasicCard(answers.front, answers.back);
                            promptForCard();
                        });
                    }
                    else {
                        inquirer.prompt([
                            {
                                name: "text",
                                message: "What is the full text of the cloze card?"
                            }, {
                                name: "cloze",
                                message: "What is the cloze text of the cloze card?"
                            }
                        ]).then(function (answers) {
                            if (answers.text.indexOf(answers.cloze) !== -1) {
                                addClozeCard(answers.text, answers.cloze);
                            }
                            else {
                                console.log("Invalid input. Cloze text does not appear in full text.")
                            }
                            promptForCard();
                        });

                    }
                });
            }
            else {
                console.log("Basic Cards:");
                for (var i = 0; i < basicCards.length; i++) {
                    basicCards[i].printCard();
                }
                console.log("Cloze Cards:");
                for (var j = 0; j < clozeCards.length; j++) {
                    clozeCards[j].printCard();
                }
            }
        });
}

