import MathParser from "../scripts/math/operations/parser.js"
import {callLexerEvaluation} from "./math/main.js"

// all the button

const btns = document.querySelectorAll(".btn")

// important buttons
const clear = document.querySelector(".clear") // the clear button
const cancel = document.querySelector(".delete") // the delete button


// the equal button
const equal = document.querySelector(".equal")

// the input box
const input = document.querySelector(".display")


cancel.addEventListener('click', function(event) {
    // redirect to the / url
    window.location.href = "/" // redirect to the index.html
})

function changeInput(value) {
    /**
     * Set the input the
     * the value passed in
     */
    input.value += value
}

btns.forEach(function(btn) {
    // add a click event listener for
    // each of the buttons
    btn.addEventListener('click', function(event) {
        /**
         * On a button click
         * add the button text 
         * to the input box
         */
        changeInput(
            btn.innerHTML
        )
    })
})

// clear the input box
function clearInput() {
    input.value = ""
}

// clear the input box on clicking clear
clear.addEventListener('click', function() {
    clearInput()
})

equal.addEventListener('click', function(event) {
    var lexicalAnalyser = callLexerEvaluation(input.value)
    var tokens = lexicalAnalyser.startEvaluation()

    var math_parser = new MathParser(tokens)

        // the final answer
    var answer = math_parser.startMathematicalParsing()

    clearInput()
    changeInput(eval(input.value))
})