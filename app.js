let numbers = document.querySelectorAll(".number");
let input = document.querySelector("input[type='text']")
let operators = document.querySelectorAll(".operation")
let equalsSign = document.querySelector(".equals")
let del = document.querySelector(".deleteOne")
let ce = document.querySelector(".deleteAll")


function writeNumbers() {
    for (let num of numbers) {
        num.addEventListener("click", () => {
            input.value += num.textContent;
        })
    }
}

writeNumbers()

let operations = {
    "x": function (a, b) {
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

function addOperation() {
    for (let operator of operators) {
        operator.addEventListener("click", () => {
            let lastOperator = operator.textContent;
            if (Object.keys(operations).includes(input.value[input.value.length - 1])) {
                input.value = input.value.replace(input.value[input.value.length - 1], operator.textContent)
            }
            else if (/\D/.test(input.value)) {
                console.log("Show result and show that operation")
                result(getNumbers(), getOperation());
                input.value += lastOperator;
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

function getNumbers() {
    [a, b] = (input.value.split(/\D/)).map(a => parseFloat(a))
    return [a, b]
}

function getOperation() {
    operation = (input.value.split(/\d/)).filter(el => el !== "")
    return operations[operation]
}

function result(numbers, operation) {
    console.log(operation(numbers[0], numbers[1]))
    input.value = `${operation(numbers[0], numbers[1])}`;
}

equalsSign.addEventListener("click", () => {
    result(getNumbers(), getOperation())
})


function deleteOne() {
    del.addEventListener("click", () => {
        input.value = input.value.slice(0, input.value.length - 1)
    })
};
deleteOne()

function deleteAll() {
    ce.addEventListener("click", () => {
        input.value = "";
    })
}

deleteAll()