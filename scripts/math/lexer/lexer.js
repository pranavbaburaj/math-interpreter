import {NumberValue} from "./types/number.js"
import createTokens from "./tokens/tokens.js"

// import Parenthesis from "./types/parenthesis.js"
import parenthesisType from "./types/paran.js"


const operators = new Array(
    "+", "/", "*", "-", "%", "^"
)

const parenthesis = new Array(
    "(", ")"
)
export default class LexicalAnalyser {
    constructor(data) {
        this.data = data
        this.pos = 0
        this.curr = this.setCurrentCharacter()
        this.tokens = new Array()
    }

    setCurrentCharacter() {
        if (this.data.length == this.pos) {
            return null
        } else {
            return this.data[this.pos]
        }
    }

    startEvaluation() {
        this.curr = this.setCurrentCharacter()

        while (this.curr != null) {
            if (this.curr == " "){
                // spaces are not taken
                // into action
            } else if (Number.isInteger(parseInt(this.curr))) {
                var new_number = new NumberValue(this.data, this.pos)
                var info = new_number.startEvaluation()

                this.pos = info[0] - 1
                this.tokens.push(info[1])
            } else if (operators.includes(this.curr)) {
                this.tokens.push(createTokens(this.curr, "operator"))
            } else if (parenthesis.includes(this.curr)){
                this.tokens.push(createTokens(this.curr, parenthesisType(this.curr)))         
            } else {
                console.error(`Undefined ${this.curr}`)
                break
            }

            this.pos += 1
            this.curr = this.setCurrentCharacter()
        }

        return this.tokens
    }
}