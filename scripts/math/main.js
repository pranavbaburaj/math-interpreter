import LexicalAnalyser from "./lexer/lexer.js"


// CALL THE LEXER EVALUATION CLASS
export function callLexerEvaluation(evalData) {
    var lexer = new LexicalAnalyser(evalData)
    return lexer
}

/*
get the current character for lexical analasys
=> data = "hello" pos=4 -> return null
=> data = "hello" pos=2 -> data[2] = l
 */
export function currentCharacter(data, pos) {
    if (data.length == pos) {
        return null
    } else {
        return data[pos]
    }
}

// type analyser
/*
=> Floating point (float)
=> Integers (int)
=> Variables (that change)
 */

export function typeAnalyser(value) {
    if (Number.isInteger(parseInt(value))){
        if (value.toString().includes(".")){
            return "float"
        } else {
            return "int"
        }
    } else {
        return "Invalid"
    }
}