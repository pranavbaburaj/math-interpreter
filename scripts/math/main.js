import LexicalAnalyser from "./lexer/lexer.js"

export function callLexerEvaluation(evalData) {
    var lexer = new LexicalAnalyser(evalData)
    return lexer
}

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