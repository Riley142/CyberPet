const petCat = document.querySelector("#cat")
const petDog = document.querySelector("#dog")
const petRabbit = document.querySelector("#rabbit")

const displayDiv1 = document.querySelector(".funcs1")
const displayDiv2 = document.querySelector(".funcs2")
const displayDiv3 = document.querySelector(".funcs3")

const play = document.querySelector("#play")
const feed = document.querySelector("#feed")
const drink = document.querySelector("#drink")

let pet;

petCat.addEventListener("click", (evt) => {
    petDog.style.display = "none";
    petRabbit.style.display = "none";
    displayDiv1.style.display = "block";
    pet = new Pet("Cat");
    attachEvtL();
});

petDog.addEventListener("click", (evt) => {
    petCat.style.display = "none";
    petRabbit.style.display = "none";
    displayDiv2.style.display = "block";
    pet = new Pet("Dog");
    attachEvtL();
});

petRabbit.addEventListener("click", (evt) => {
    petDog.style.display = "none";
    petCat.style.display = "none";
    displayDiv3.style.display = "block";
    pet = new Pet("Rabbit");
    attachEvtL();
});

const attachEvtL = () => {
    play.addEventListener("click", () => {pet.play()})
    feed.addEventListener("click", () => {pet.feed()})
    drink.addEventListener("click",() => {pet.drink()})
}