import { useContext } from "react";
import { MenuContext } from "../contexts/MenuContext.jsx";

export function useMenu(){
    const context = useContext(MenuContext)

    if(context == undefined){
        throw new Error('useMenu must be used whithin a MenuProvider')
    }
    
    const {selectedTag, setSelectedTag} = context

    return {selectedTag, setSelectedTag}
}