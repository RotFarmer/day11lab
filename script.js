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
        newDiv.classList.add("circle")
        newDiv.innerText = `${coin}`;
        let coinContainer = document.querySelector(".coin-container");
        coinContainer.append(newDiv);
        newDiv.addEventListener("click", () => {
            // newDiv.style.display = "none"
            newDiv.remove()
        })
        let coinCount = document.querySelector(".coinTotal");
        let cointotes = 0
        if (coin === "penny") {
            newDiv.classList.add("penny")
            let worth = 0.01
            cointotes += (worth * number)
        } else if (coin === "nickel") {
            newDiv.classList.add("nickel")
            let worth = 0.05
            cointotes += (worth * number)
        } else if (coin === "dime") {
            newDiv.classList.add("dime")
            let worth = 0.10
            cointotes += (worth * number)
        } else if (coin === "quarter") {
            newDiv.classList.add("quarter")
            let worth = 0.25
            cointotes += (worth * number)
            coinCount.innerText = `Total: $${cointotes.toFixed(2)}`
        }
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