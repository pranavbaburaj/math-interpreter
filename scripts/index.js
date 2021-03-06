import {callLexerEvaluation} from "./math/main.js"

// the main mathematical parser
import MathParser from "./math/operations/parser.js"

// the text output
const output = document.querySelector(".h")

// the text input
const input = document.querySelector(".inp")
const submissionButton = document.querySelector(".sub")


// update the output
function updateOutput(outputText) {
    output.innerHTML = outputText
}


// get the input value
function getInputValue() {
    return input.value
}

export function evaluate(eq) {
    var lexicalAnalyser = callLexerEvaluation(eq)
    var tokens = lexicalAnalyser.startEvaluation()
    console.log(tokens)

    var math_parser = new MathParser(tokens)

    // the final answer
    var answer = math_parser.startMathematicalParsing()

    // updating the output with the final answer
    
    return `${answer}(${eval(getInputValue().toString())})`
} 


// input submission listener
input.addEventListener('keydown', (event) => {
    if (event.keyCode == 13) {
        // if eneter key presses
        updateOutput(evaluate(getInputValue()))
        input.value = ""
    }
})

submissionButton.addEventListener('click', function(event) 
{
    updateOutput(evaluate(getInputValue()))

})