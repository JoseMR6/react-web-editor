import { useElements } from "../../hooks/useElements"
import { styleObjectToCssString } from "../../logic/elements"

export function Style() {
    const { globalEstyles } = useElements()

    const styleString = styleObjectToCssString(globalEstyles)

    return (
        <style>
            {
                `${styleString}`
            }
        </style>
    )
}