import { createContext, useState } from "react";
import { PropTypes } from 'prop-types'
import { HTML_TAG_TYPES } from "../constants";

export const MenuContext = createContext()

export function MenuProvider ({children}) {
    const [selectedTag, setSelectedTag] = useState(HTML_TAG_TYPES.H1)

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