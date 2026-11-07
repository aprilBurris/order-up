console.log("Hello all")

//Array that describe
const tags = ["Soul Food", "Lunch", "Dinner"
]
//Array with prices
const prices = [
    15.99,
    17.99,
    8.99,
    9.99
]
console.log(tags)
console.log(prices)

// Get with querySelector save in variable
const tagText = document.querySelector("#tags");
tagText.textContent = "";

for (let i = 0; i < tags.length; i++) {
    tagText.textContent = tagText.textContent + tags[i] + " . ";
}