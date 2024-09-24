import { createContext, useState } from "react";
import { HTML_TAG_TYPES } from "../constants.js";
import { PropTypes } from 'prop-types'

export const MenuContext = createContext()

export function MenuProvider ({children}) {
    const [selectedTag, setSelectedTag] = useState(HTML_TAG_TYPES.H2)

    return(
        <MenuContext.Provider value={{
            selectedTag,
            setSelectedTag
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