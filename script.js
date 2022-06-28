const inputArea = document.querySelector("#receivedText")
const spanInput = document.querySelector("#spanInput")
const resultField = document.querySelector("#result")

const numbersList = []

function addNumber() {
    var receivedText = inputArea.value

    if (isNaN(receivedText) || receivedText == '') {
        alert("Please write a number")
    } else {
        numbersList[numbersList.length] = parseInt(receivedText)
        spanInput.innerHTML += `New number added: ${receivedText}` + "</br>"
    }
    inputArea.focus()
    inputArea.value = ''
}

function calculate() {
    if (numbersList == '') {
        alert("List is empty :(")
    } else {
        var sum = 0
        var biggest = numbersList[0]
        var smallest = numbersList[0]
        var total = numbersList.length
        for (let i = 0; i < numbersList.length; i++) {
            sum += numbersList[i]
            biggest = biggest > numbersList[i] ? biggest : numbersList[i]
            smallest = smallest < numbersList[i] ? smallest : numbersList[i]
        }
        var average = sum / numbersList.length
     
        resultField.innerHTML = `There are ${total} numbers in the list</br>Biggest value is ${biggest}<br>Smaller value is ${smallest}<br>Values sum is ${sum}</br>Values average is ${average}`
    }
}