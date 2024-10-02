import { camelToKebabCase } from "./text"

export function stylePropsToCssString(style){
    let output =''

    const propsStyleKeys = Object.keys(style)

    propsStyleKeys.forEach((propStyleKey) => {
        const cssKey = camelToKebabCase(propStyleKey)
        const valor = style[propStyleKey]
        output += `${cssKey}:${valor};`
    })

    return output
}

export function styleObjectToCssString(style){
    let styleString = ''

    const globalKeys = Object.keys(style)
    let isFirstTag = true

    globalKeys.forEach((globalKey)=>{
        const tagSeparator = isFirstTag ? '' : '\n'
        const tagStyleString = stylePropsToCssString(style[globalKey])

        styleString += `${tagSeparator}${globalKey}{${tagStyleString}}`
        isFirstTag = false
    })

    return styleString
}