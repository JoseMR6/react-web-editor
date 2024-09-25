import { useEffect, useState } from "react";
import { useElements } from "./useElements";

export function useMouse() {
    const [draggedElement, setDraggedElement] = useState(undefined)
    const { addElements } = useElements()

    const posicionarElemento = (elemento, x, y) => {
        elemento.style.left = x - elemento.offsetWidth / 2 + 'px'
        elemento.style.top = y - elemento.offsetHeight / 2 + 'px'
    }

    useEffect(() => {
        const eventList = []

        const handleMoverRaton = (event) => {
            document.body.append(draggedElement)
            posicionarElemento(draggedElement, event.clientX, event.clientY)
        }

        const handleSoltarRaton = (event) => {
            //revisar si esta encima de AddElement
            draggedElement.hidden = true
            const elemBelow = document.elementFromPoint(event.clientX, event.clientY)
            draggedElement.hidden = false

            if (elemBelow &&
                elemBelow.classList.contains('add-element-button') &&
                elemBelow.parentNode &&
                elemBelow.parentNode.classList.contains('add-element')
            ) {
                const idElement = elemBelow.parentNode.id
                const addTag = draggedElement.textContent

                addElements({ idElement, addTag })
            }

            //eleminar elemento flotante
            if (draggedElement && draggedElement.parentNode) {
                draggedElement.parentNode.removeChild(draggedElement)
            }

            setDraggedElement(undefined)
            document.body.style.userSelect = 'auto'
        }

        if (draggedElement) {
            eventList.push(
                {
                    type: 'pointermove',
                    function: handleMoverRaton
                },
                {
                    type: 'pointerup',
                    function: handleSoltarRaton
                }
            )
        }

        eventList.forEach(event => {
            window.addEventListener(event.type, event.function)
        });

        //Resetear eventos al desmontar effect
        return () => {
            eventList.forEach(event => {
                window.removeEventListener(event.type, event.function)
            });
        }
    }, [draggedElement])

    return {
        draggedElement, setDraggedElement,
        posicionarElemento
    }
}