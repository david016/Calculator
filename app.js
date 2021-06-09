let numbers = document.querySelectorAll(".number");
let input = document.querySelector("input[type='text']")
let operators = document.querySelectorAll(".operation")
let equalsSign = document.querySelector(".equals")


function writeNumbers() {
    for (let num of numbers) {
        num.addEventListener("click", () => {
            input.value += num.textContent;
        })
    }
}
writeNumbers()

function addOperation() {
    for (let operator of operators) {
        operator.addEventListener("click", () => {
            if (Object.keys(op).includes(input.value[input.value.length - 1])) {
                input.value = input.value.replace(input.value[input.value.length - 1], operator.textContent)
            }
            else if (/\D/.test(input.value)) {
                console.log("Show result and show that operation")
            }
            else if (input.value[input.value.length - 1] !== operator.textContent) {
                input.value += operator.textContent;
            }
            else {
                console.log("hi")
            }
        })
    }
}
addOperation();

let op = {
    x: function (a, b) {
        return a * b
    },
    "+": function (a, b) {
        return a + b
    },
    "-": function (a, b) {
        return a - b
    },
    "/": function (a, b) {
        return a / b
    },
}
function numsToArray() {
    input.value.split(/\D/)
}

// function result() {

// }

// function deleteAll(){

// }

// function deleteOne(){

// };