var ClozeCard = function(text, cloze) {
    if (text.indexOf(cloze) !== -1) {
        this.cloze = cloze;
        this.fullText = text;
        this.partial = text.replace(cloze, "...");
    }
    else {
        console.log("Invalid input!");
    }
};

ClozeCard.prototype.printCard = function () {
    console.log("Full Text: " + this.fullText + "\nCloze Text: " + this.cloze + "\nPartial Text: " + this.partial);
    console.log("---------------");
};

module.exports = ClozeCard;