const inputArea = document.querySelector("#receivedText")
const textarea = document.querySelector("textarea")



function addNumber() {
    const receivedText = inputArea.value
    //Verificar se é um numero e se nao esta vazio

    if (isNaN(receivedText) || receivedText == '') {
        //not a number or empty
        alert("Please write a number")
    } else {
        console.log(receivedText)
        textarea.innerHTML = `New number added: ${receivedText}` + "\r\n"
    }
}

function calculate() {
    console.log("Calculate working ^^")
}