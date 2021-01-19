import * as readline from 'readline'
import {callMathInterpreter} from "./interpret.js"

const readInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
  

readInterface.question("Input [?]", function(inp) {
    const mathInterpreter = new callMathInterpreter(inp)
    console.log(mathInterpreter.answer)
    readInterface.close()
})