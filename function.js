function Upper() {
    let inputText = document.getElementById("txtvalue")
    inputText.value = inputText.value.toUpperCase()
    }
    
function Lower() {
    let inputText = document.getElementById("txtvalue")
    inputText.value = inputText.value.toLowerCase()
}

function Alt() {
    let inputText = document.getElementById("txtvalue")
    let inputString = inputText.value
    let result = ""
    for (let i = 0; i < inputString.length; i++) {
        if (i % 2 === 0) {
        result += inputString[i].toUpperCase()
        } else {
        result += inputString[i].toLowerCase()
        }
    }
    inputText.value = result
}

function Reverse() {
    let inputText = document.getElementById("txtvalue")
    let inputStr = inputText.value
    let result = ""
    for (let i = inputStr.length - 1; i >= 0; i--) {
        result += inputStr[i]
    }
    inputText.value = result
}
    