const inputArea = document.querySelector("#receivedText")
// const textarea = document.querySelector("textarea")
const spanInput = document.querySelector("#spanInput")

const numbersList = []

function addNumber() {
    const receivedText = inputArea.value

    if (isNaN(receivedText) || receivedText == '') {
        //not a number or empty
        alert("Please write a number")
    } else {
        console.log(receivedText)
        numbersList[numbersList.length] = receivedText
        console.log(numbersList)
        spanInput.innerHTML += `New number added: ${receivedText}` + "</br>"
    }
}

function calculate() {
    console.log("Calculate working ^^")
}