import './TMain.css'
import { PropTypes } from 'prop-types'
import { useId, useState } from 'react'
import { TITLE_TYPES, ELEMENT_TYPES } from '../../constants.js'
import { addElements } from '../../logic/elements.js'

export function Titulo({ id, text, type }) {
    var textHtml = "<" + type + ">" + text + "</" + type + ">"

    return (
        <>
            <div id={id} className='element-container'
                dangerouslySetInnerHTML={{ __html: textHtml }}
            />
        </>
    )
}

Titulo.propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}


export function AddElement({ id, elementos, setElementos }) {
    const elementType = ELEMENT_TYPES.TITULO
    const elementOptions = {
        text: "Titulo de add element",
        type: TITLE_TYPES.H3
    }
    const newIds = {
        1: useId(),
        2: useId(),
        3: useId()
    }
    const idElement = id

    return (
        <>
            <div id={idElement} className='add-element'>
                <span onClick={() =>
                    addElements({ idElement, elementType, elementOptions, 
                        newIds, elementos, setElementos 
                    })}
                >
                    +
                </span>
            </div>
        </>
    )
}

AddElement.propTypes = {
    id: PropTypes.string.isRequired,
    elementos: PropTypes.array.isRequired,
    setElementos: PropTypes.func.isRequired
}

export function TMain() {
    const [elementos, setElementos] = useState(
        [
            {
                id: useId(),
                type: ELEMENT_TYPES.ADD_ELEMENT
            },
            {
                id: useId(),
                type: ELEMENT_TYPES.TITULO,
                param: {
                    text: 'Titulo h1 mock',
                    type: TITLE_TYPES.H1
                }
            },
            {
                id: useId(),
                type: ELEMENT_TYPES.ADD_ELEMENT
            },
            {
                id: useId(),
                type: ELEMENT_TYPES.TITULO,
                param: {
                    text: 'Titulo h2 mock',
                    type: TITLE_TYPES.H2
                }
            },
            {
                id: useId(),
                type: ELEMENT_TYPES.ADD_ELEMENT
            }
        ]
    )

    return (
        <>
            <main id='template-main'>

                {elementos.map(elemento => {

                    var component = <div key={elemento.id}>error</div>

                    if (elemento.type == ELEMENT_TYPES.ADD_ELEMENT) {
                        component = (
                            <AddElement
                                key={elemento.id}
                                id={elemento.id}
                                elementos={elementos}
                                setElementos={setElementos}
                            />
                        )
                    } else if (elemento.type == ELEMENT_TYPES.TITULO) {
                        component = (
                            <Titulo
                                key={elemento.id}
                                id={elemento.id}
                                text={elemento.param.text}
                                type={elemento.param.type}
                            />
                        )
                    }

                    return (
                        <>
                            {component}
                        </>
                    )
                })}

            </main>
        </>/**/
        /*<>
            <main id='template-main'>
                <Titulo 
                    text={'Titulo h1'} 
                    type={TITLE_TYPES.H1}
                />
                <Titulo 
                    text={'Titulo h2'} 
                    type={TITLE_TYPES.H2}
                />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam orci lorem, aliquet sit amet vulputate et, finibus a neque.
                    Duis eu pulvinar quam. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Nunc pellentesque sem eu ligula
                    convallis condimentum. Morbi mattis, ex nec dictum malesuada,
                    erat enim convallis leo, vel posuere quam turpis sit amet mi.
                    <br/>
                    Maecenas consectetur ullamcorper dui, eu accumsan ipsum hendrerit
                    suscipit. Proin sit amet risus augue. Aenean faucibus, lectus a
                    tristique sagittis, urna arcu blandit urna, sit amet tempus enim
                    metus non sem. Curabitur mollis ex vel venenatis pellentesque.
                </p>
                <div className='element-separator'/>
                <Titulo 
                    text={'Titulo h2'} 
                    type={TITLE_TYPES.H2}
                />
                <p>
                    Aenean lacus turpis, facilisis eu cursus in, posuere posuere mi.
                    Curabitur facilisis nec nisl sit amet congue. Nunc elementum
                    viverra leo non molestie.
                </p>
                <Titulo 
                    text={'Titulo h3'} 
                    type={TITLE_TYPES.H3}
                />
                <p>
                    Vivamus consectetur leo ante, quis gravida arcu porta ac.
                </p>
                <Titulo 
                    text={'Titulo h3'} 
                    type={TITLE_TYPES.H3}
                />
                <p>
                    Integer commodo est placerat, lacinia tellus sed, dapibus turpis.
                    Integer pulvinar metus ac purus lacinia faucibus.
                </p>
                <Titulo 
                    text={'Titulo h3'} 
                    type={TITLE_TYPES.H3}
                />
                <p>
                    Morbi varius tortor dolor, scelerisque scelerisque lectus consectetur et.
                    Donec imperdiet consequat vehicula.
                </p>
            </main>
        </>*/
    )
}