const inputArea = document.querySelector("#receivedText")
// const textarea = document.querySelector("textarea")
const spanInput = document.querySelector("#spanInput")
const resultField = document.querySelector("#result")
console.log(resultField)

const numbersList = []

function addNumber() {
    const receivedText = inputArea.value

    if (isNaN(receivedText) || receivedText == '') {
        alert("Please write a number")
    } else {
        numbersList[numbersList.length] = parseInt(receivedText)
        spanInput.innerHTML += `New number added: ${receivedText}` + "</br>"
    }
    inputArea.focus()
    //Not able to empty
    // inputArea.innerHTML = ""
}

function calculate() {
    if (numbersList == '') {
        console.log("empty :(")
    } else {
        console.log(numbersList)
        var sum = 0
        var biggest = numbersList[0]
        var smallest = numbersList[0]
        for (let i = 0; i < numbersList.length; i++) {
            sum += numbersList[i]
            biggest = biggest > numbersList[i] ? biggest : numbersList[i]
            smallest = smallest < numbersList[i] ? smallest : numbersList[i]
        }
        var average = sum / numbersList.length
        console.log("Sum is ", sum)
        console.log("Average is ", average)

        resultField.innerHTML = `Biggest value is ${biggest}<br>Smaller value is ${smallest}<br>Values sum is ${sum}</br>Values average is ${average}`
    }
}