import { createContext, useState } from "react";
import { PropTypes } from 'prop-types'
import { HTML_TAG_TYPES, SELECTED_ELEMENT_TYPES } from "../constants/constants";

export const MenuContext = createContext()

export function MenuProvider ({children}) {
    const [selectedTag, setSelectedTag] = useState(HTML_TAG_TYPES.H1)
    const [selectedElementType, setSelectedElementType] = useState(
        SELECTED_ELEMENT_TYPES.GLOBAL_DOCUMENT)

    return(
        <MenuContext.Provider value={{
            selectedTag,
            setSelectedTag,
            selectedElementType,
            setSelectedElementType
        }}>
            {children}
        </MenuContext.Provider>
    )
}

MenuProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object
    ]).isRequired
}