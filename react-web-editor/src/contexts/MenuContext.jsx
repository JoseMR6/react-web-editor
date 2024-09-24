import { createContext, useState } from "react";
import { PropTypes } from 'prop-types'

export const MenuContext = createContext()

export function MenuProvider ({children}) {
    const [selectedTag, setSelectedTag] = useState()

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