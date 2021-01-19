import {callLexerEvaluation} from "../scripts/math/main.js"

// the main mathematical parser
import MathParser from "../scripts/math/operations/parser.js"

export class callMathInterpreter {


    constructor(formula) {
        this.math = formula // the math formula
        this.answer = this.init()
    }

    init() {
        var lexicalAnalyser = callLexerEvaluation(this.math)
        var tokens = lexicalAnalyser.startEvaluation()

        var math_parser = new MathParser(tokens)

        // the final answer
        var answer = math_parser.startMathematicalParsing()
        console.log(answer)
    }
}