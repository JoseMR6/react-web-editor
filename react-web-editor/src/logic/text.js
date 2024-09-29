import { ESPECIAL_CAHARACTERS } from "../constants"

export function formatHtmlText (initialText){
    var formatedText = ''

    for(var i=0;i<initialText.length;i++){
        const char=initialText.charAt(i)
        var newChar=''
        
        if(ESPECIAL_CAHARACTERS[char]){
            newChar=ESPECIAL_CAHARACTERS[char]
        }else{
            newChar=char
        }
        
        formatedText+=newChar
    }

    return formatedText
}