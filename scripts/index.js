import {callLexerEvaluation} from "./math/main.js"

// the text output
const output = document.querySelector(".h")

// the text input
const input = document.querySelector(".inp")
const submissionButton = document.querySelector(".sub")


// update the output
function updateOutput(outputText) {
    output.innerHTML = outputText
}

function getInputValue() {
    return input.value
}

function evaluate(eq) {
    var lexicalAnalyser = callLexerEvaluation(eq)
    var tokens = lexicalAnalyser.startEvaluation()
    console.log(tokens)
} 


// input submission listener
input.addEventListener('keydown', (event) => {
    if (event.keyCode == 13) {
        // if eneter key presses
        evaluate(getInputValue())
    }
})

submissionButton.addEventListener('click', function(event) 
{
    evaluate(getInputValue())
})