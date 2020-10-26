"use strict";
// vending machine
let totalCost = document.querySelector(".total");


let total = 0;


let colabutton = document.querySelector(".cola")
colabutton.addEventListener("click", () => {
    let price = parseFloat(colabutton.getAttribute("data-price"))
    total += price
    totalCost.innerText = `Total: $${total.toFixed(2)}`
})

let pretzelbutton = document.querySelector(".pretzels")
pretzelbutton.addEventListener("click", () => {
    let price = parseFloat(pretzelbutton.getAttribute("data-price"))
    total += price
    totalCost.innerText = `Total: $${total.toFixed(2)}`
})


let candybutton = document.querySelector(".candy-bar")
candybutton.addEventListener("click", () => {
    let price = parseFloat(candybutton.getAttribute("data-price"))
    total += price
    totalCost.innerText = `Total: $${total.toFixed(2)}`
})

let waterbutton = document.querySelector(".water")
waterbutton.addEventListener("click", () => {
    let price = parseFloat(waterbutton.getAttribute("data-price"))
    total += price
    totalCost.innerText = `Total: $${total.toFixed(2)}`
})


// money maker

let moneyMaker = document.querySelector(".coin-creator");

moneyMaker.addEventListener("submit", (e) => {
    e.preventDefault();
    let formData = new FormData(moneyMaker);
    let number = formData.get("number");
    let coin = formData.get("coin");
    for (let i = 1; i <= number; i++) {
        let newDiv = document.createElement("div");
        newDiv.innerText = `${coin}`;
        let coinContainer = document.querySelector(".coin-container");
        coinContainer.append(newDiv);
        newDiv.addEventListener("click", () => {
            newDiv.style.display = "none"
        })
    }
    moneyMaker.reset();
})

// light bulb

let lightbulb = document.querySelector(".lightBulb")

const lightact = () => {
    lightbulb.classList.add("lightact")
};
const darkact = () => {
    lightbulb.classList.remove("lightact")
};
const toggle = () => {
    lightbulb.classList.toggle("lightact")
};
const endact = () => {
    lightbulb.classList.add("endact")
    onbutton.disabled = true
    offbutton.disabled = true
    togglebutton.disabled = true
    endbutton.disabled = true
};
let onbutton = document.querySelector(".on")
onbutton.addEventListener("click", lightact)

let offbutton = document.querySelector(".off")
offbutton.addEventListener("click", darkact)

let togglebutton = document.querySelector(".toggle")
togglebutton.addEventListener("click", toggle)

let endbutton = document.querySelector(".end")
endbutton.addEventListener("click", endact)