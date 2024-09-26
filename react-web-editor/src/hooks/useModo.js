import { useContext } from "react"
import { ModoContext } from "../contexts/ModoContext.jsx"

export function useModo() {
    const context = useContext(ModoContext)

    if(context == undefined){
        throw new Error('useModo must be used whithin a ModoProvider')
    }

    const {modo, toggleModo} = context

    return {modo, toggleModo}
}