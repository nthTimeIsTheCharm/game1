class Player extends GameEntity {
  constructor(speed, direction) {
    super(speed, direction);
    this.score = 0;
    this.lives = 5;
    this.jumpHeight = (Math.floor(game.gameArea.getBoundingClientRect().height/10)*5); //so that it's a multiple of 5 as the fall decrement is 5

    this.jumpCounter = 0;
    this.element = document.getElementById("player");
    this.position.push(
      0,
      this.element.getBoundingClientRect().left -
        this.element.getBoundingClientRect().width / 2
    );
  }


  jump() {
    if (this.jumpCounter === 0) {
      this.position[0] += this.jumpHeight;
      console.log("1st jump", this.position[0]);
    } else if (this.jumpCounter === 1) {
      const smallerJump = Math.floor(this.jumpHeight / 100)*50;
      this.position[0] += smallerJump;
      console.log("2nd jump", this.position[0]);
    }
    this.jumpCounter++;
    console.log("jumpCounter", this.jumpCounter);
    return `${this.position[0]}`;
  }

  earnPoints(pointIncrement) {
    this.score += pointIncrement;
  }

  getHurt(lifeDecrement) {
    this.lives += lifeDecrement;
  }
}

