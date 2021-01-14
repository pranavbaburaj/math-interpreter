// The token creating class

export default function createTokens(tokenValue, tokenType) {
    return {
        value : tokenValue,
        type : tokenType
    }
}