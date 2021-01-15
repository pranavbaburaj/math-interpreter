/*
These static methods are used
for performing different 
arithmetical
operations
 */

export default class ArithmeticOperations {
    // the class only contains static files
    // for the access of functions
    // without having a  contructor method

    // the addition operator
    static Addition(aNode, bNode){
        return aNode + bNode
    }

    // the subtraction operator
    static Subtraction(aNode, bNode) {
        return aNode - bNode
    }

    static Division(aNode, bNode){
        return aNode / bNode
    }

    static Multiplication(aNode, bNode) {
        return aNode * bNode
    }

    static Exponents(aNode, bNode){
        return Math.pow(aNode, bNode)
    }

    // => 120 % 60 = 0
    static Remainder(aNode, bNode){
        return aNode % bNode
    } 
}