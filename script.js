const inputArea = document.querySelector("#receivedText")
// const textarea = document.querySelector("textarea")
const spanInput = document.querySelector("#spanInput")

const numbersList = []

function addNumber() {
    const receivedText = inputArea.value

    if (isNaN(receivedText) || receivedText == '') {
        alert("Please write a number")
    } else {
        numbersList[numbersList.length] = parseInt(receivedText)
        spanInput.innerHTML += `New number added: ${receivedText}` + "</br>"
    }
}

function calculate() {
    if (numbersList == '') {
        console.log("empty :(")
    } else {
        console.log(numbersList)
        var sum = 0
        for (let i = 0; i <= numbersList.length; i++) {
            sum += numbersList[i]
            
        }
        console.log("Sum is ", sum)
    }
}