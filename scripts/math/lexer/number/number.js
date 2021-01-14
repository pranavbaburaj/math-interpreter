import {currentCharacter, typeAnalyser} from "../../main.js"
import createTokens from "../tokens/tokens.js"

export class NumberValue {
    constructor(data, pos){
        this.data = data;
        this.pos = pos
        this.curr = currentCharacter(data, pos)
        // this.data_to_string = ""
        // console.log(this.curr)
    }

    startEvaluation() {
        var data = ""
        while (Number.isInteger(parseInt(this.curr)) || this.curr == ".") {
            data += this.curr

            this.pos += 1
            this.curr = currentCharacter(this.data, this.pos)
        }

        return [this.pos, createTokens(
            data, typeAnalyser(data)
        )]
    }
}