import { useContext } from "react";
import { ElementsContext } from "../contexts/ElementsContext.jsx";

export function useElements () {
    const context = useContext(ElementsContext)


    if(context == undefined){
        throw new Error('useElements must be used whithin a ElementsProvider')
    }
    
    const {elementos, setElementos, contElements} = context

    return {elementos, setElementos, contElements}
}