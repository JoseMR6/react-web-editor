import { ESPECIAL_CAHARACTERS } from "../constants/constants"

export function formatHtmlText(initialText) {
    let formatedText = ''

    for (let i = 0; i < initialText.length; i++) {
        const char = initialText.charAt(i)
        let newChar = ''

        if (ESPECIAL_CAHARACTERS[char]) {
            newChar = ESPECIAL_CAHARACTERS[char]
        } else {
            newChar = char
        }

        formatedText += newChar
    }

    return formatedText
}

export function camelToKebabCase(initialText) {
    let formatText = ''
    
    
    for (let i = 0; i < initialText.length; i++) {
        const char = initialText.charAt(i)
        if (char == char.toUpperCase()) {
            formatText += '-' + char.toLowerCase()
        } else {
            formatText += char
        }
    }

    return formatText
}