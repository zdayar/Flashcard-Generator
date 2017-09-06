var BasicCard = function(front, back) {
    this.front = front;
    this.back = back;
};

BasicCard.prototype.printCard = function () {
    console.log("Front: " + this.front + "\nBack: " + this.back);
    console.log("---------------");
};

module.exports = BasicCard;
