class Pet {
    constructor (petName){
        this.petName = petName;
        this.funLvl = 0;
        this.hungerLvl = 0;
        this.thirstLvl = 0;
    }

    play() {  
        if (this.funLvl === 0) {
            play.innerText = `Your ${this.petName}, is still bored! ${this.petName} wants to play!`;
        } else 
            play.innerText = `${this.petName}, is happy!`;
        this.funLvl++;    
    }
    
    feed() {
        if (this.hungerLvl === 0) {
            feed.innerText = `Your ${this.petName}, is hungry! ${this.petName} needs to eat!`;
        } else 
            feed.innerText = `Your ${this.petName}, is full!`;
        this.hungerLvl++;
    }

    drink() {
        if (this.thirstLvl === 0) {
            drink.innerText = `Your ${this.petName}, is thirsty! ${this.petName} needs to drink!`;
        } else 
            drink.innerText = `Your ${this.petName}, is full!`;
        this.thirstLvl++;
    }
}