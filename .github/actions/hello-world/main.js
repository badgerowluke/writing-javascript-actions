const core = require("@actions/core")
const fistGreeting = core.getInput("first-greeting")
const secondGreeting = core.getInput("second-greeting")
const thirdGreeting = core.getInput("third-greeting")


console.log(`Hello ${fistGreeting}`)
console.log(`Hello ${secondGreeting}`)
if(thirdGreeting) {
    console.log(`Hello ${thirdGreeting}`)
}