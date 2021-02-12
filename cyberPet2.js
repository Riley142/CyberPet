const petCat = document.querySelector("#cat")
const petDog = document.querySelector("#dog")
const petRabbit = document.querySelector("#rabbit")
const displayDiv1 = document.querySelector(".funcs1")
const displayDiv2 = document.querySelector(".funcs2")
const displayDiv3 = document.querySelector(".funcs3")
const barsCat = document.querySelector(".barsCat")
const barsDog = document.querySelector(".barsDog")
const barsRabbit = document.querySelector(".barsRabbit")
const play = document.querySelector("#play")
const feed = document.querySelector("#feed")
const drink = document.querySelector("#drink")
const playBar = document.querySelector(".progressWidthPlay")
const hungerBar = document.querySelector(".progressWidthHunger")
const thirstBar = document.querySelector(".progressWidthThirst")
const start = document.querySelector("#start")
let pet;

start.addEventListener("click", (evt) => {
    window.location.reload();
});

petCat.addEventListener("click", (evt) => {
    barsCat.style.display = "flex";
    petDog.style.display = "none";
    petRabbit.style.display = "none";
    displayDiv1.style.display = "flex";
    pet = new Pet("Cat");
    attachEvtL();
});

petDog.addEventListener("click", (evt) => {
    barsDog.style.display = "flex";
    petCat.style.display = "none";
    petRabbit.style.display = "none";
    displayDiv2.style.display = "flex";
    pet = new Pet("Dog");
    attachEvtL();
});

petRabbit.addEventListener("click", (evt) => {
    barsRabbit.style.display = "flex";
    petDog.style.display = "none";
    petCat.style.display = "none";
    displayDiv3.style.display = "flex";
    pet = new Pet("Rabbit");
    attachEvtL();
});

const attachEvtL = () => {
    play.addEventListener("click", () => {pet.play()})
    feed.addEventListener("click", () => {pet.feed()})
    drink.addEventListener("click",() => {pet.drink()})
}