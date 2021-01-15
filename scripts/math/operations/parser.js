import createTokens from "../lexer/tokens/tokens.js"
import ArithmeticOperations from "./op/operations.js"


// all arithmetic operations 
// possible
const operationsValues = [
    ArithmeticOperations.Addition,      // addition 
    ArithmeticOperations.Subtraction,   // subtraction
    ArithmeticOperations.Division,      // division
    ArithmeticOperations.Multiplication,// multiplication
    ArithmeticOperations.Exponents,     // exponents
    ArithmeticOperations.Remainder      // remainder
]

// check if a  token is operator
// and return the arithmetic operation

const isOperator = (op) => {
    var arr = ["+", "-", "/", "*", "^", "%"]

    for (var x = 0; x < arr.length; x++){
        if(op.value == arr[x]){
            return operationsValues[x]
        }
    }

    return operationsValues[0]

}


// the function to determine the operator
// and return the result
const getOperator = (t, x) => {
    var arr = []
    if (x == 0){
        arr.push(createTokens(0.00, "int"))
    } else {
        arr.push(t[x - 1])
    }

    arr.push(t[x])
    if (x + 1 == t.length) {
        arr.push(createTokens(0.00, "int"))
    } else {
        arr.push(t[x + 1])
    }
    
    var re = isOperator(arr[1])
    var d = re(parseFloat(arr[0].value),
    parseFloat(arr[arr.length - 1].value)
    )
    return parseFloat(d)
}


export default class MathParser {
    constructor(dataArray) {
        this.tokens = dataArray
        this.resultOfEquation = parseFloat(0)
        this.res = new Array()
    }

    startMathematicalParsing() {
        var ans = 0 // answer
        for (var x = 0; x < this.tokens.length; x++){

            /**
             * If the current token is an operator
             * get the answer
             */
            if(this.tokens[x].type == "operator"){

                ans += parseFloat(
                    getOperator(this.tokens, x)
                )

            }
        }
        console.log(ans)
        return ans // the final answer

    }

}