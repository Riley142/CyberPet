class Pet {
    constructor (petName){
        this.petName = petName;
        this.funLvl = 0;
        this.hungerLvl = 0;
        this.thirstLvl = 0;
    }

    play() {  
        if (this.funLvl === 4) {
            play.innerText = `${this.petName}, is happy!`;
            playBar.style.width = "100%";
        } else if (this.funLvl === 3) {
            play.innerText = `Play with Your ${this.petName}!`;
            playBar.style.width = "80%";
        } else if (this.funLvl === 2) {
            play.innerText = `Play with Your ${this.petName}!`;
            playBar.style.width = "60%";
        } else if (this.funLvl === 1) {
            play.innerText = `Play with Your ${this.petName}!`;
            playBar.style.width = "40%";
        } else if (this.funLvl === 0) {
            play.innerText = `Play with Your ${this.petName}!`;
            playBar.style.width = "20%";
        }  
        this.funLvl++;
    }
    
    feed() {
        if (this.hungerLvl === 4) {
            play.innerText = `Your ${this.petName}, is full!`;
            hungerBar.style.width = "100%";
        } else if (this.hungerLvl === 3) {
            feed.innerText = `Give Your ${this.petName} some more  food!`
            hungerBar.style.width = "80%";
        } else if (this.hungerLvl === 2) {
            feed.innerText = `Give Your ${this.petName} some more  food!`
            hungerBar.style.width = "60%";
        } else if (this.hungerLvl === 1) {
            feed.innerText = `Give Your ${this.petName} some more  food!`
            hungerBar.style.width = "40%";
        } else if (this.hungerLvl === 0) {
            feed.innerText = `Give Your ${this.petName} some more  food!`
            hungerBar.style.width = "20%";
        }  
        this.hungerLvl++;
    }

    drink() {
        if (this.thirstLvl === 4) {
            drink.innerText = `Your ${this.petName}, is full!`
            thirstBar.style.width = "100%";
        } else if (this.thirstLvl === 3) {
            drink.innerText = `Give Your ${this.petName} some more water`;
            thirstBar.style.width = "80%";
        } else if (this.thirstLvl === 2) {
            drink.innerText = `Give Your ${this.petName} some more water`;
            thirstBar.style.width = "60%";
        } else if (this.thirstLvl === 1) {
            drink.innerText = `Give Your ${this.petName} some more water`;
            thirstBar.style.width = "40%";
        } else if (this.thirstLvl === 0) {
            drink.innerText = `Give Your ${this.petName} some more water`;
            thirstBar.style.width = "20%";
        }  
        this.thirstLvl++;
    }
}