import './TMain.css'
import { ELEMENT_TYPES } from '../../constants.js'
import { Titulo, AddElement, Parrafo } from './TElements.jsx'
import { useElements } from '../../hooks/useElements.js'

export function TMain() {
    const {elementos} = useElements()

    return (
        <>
            <main id='template-main'>

                {elementos.map(elemento => {

                    var component = <div key={elemento.id}>error</div>

                    if (elemento.type == ELEMENT_TYPES.ADD_ELEMENT) {
                        component = (
                            <AddElement
                                id={elemento.id}
                            />
                        )
                    } else if (elemento.type == ELEMENT_TYPES.TITULO) {
                        component = (
                            <Titulo
                                id={elemento.id}
                                text={elemento.param.text}
                                type={elemento.param.type}
                            />
                        )
                    }else if(elemento.type == ELEMENT_TYPES.PARRAFO){
                        component = (
                            <Parrafo
                                id={elemento.id}
                                text={elemento.param.text}
                            />
                        )
                    }else{
                        throw new Error('Elemento tiene un tipo no esperado')
                    }

                    return (
                        <div key={elemento.id}>
                            {component}
                        </div>
                    )
                })}

            </main>
        </>/**/
        /*<>
            <main id='template-main'>
                <Titulo 
                    text={'Titulo h1'} 
                    type={HTML_TAG_TYPES.H1}
                />
                <Titulo 
                    text={'Titulo h2'} 
                    type={HTML_TAG_TYPES.H2}
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
                    type={HTML_TAG_TYPES.H2}
                />
                <p>
                    Aenean lacus turpis, facilisis eu cursus in, posuere posuere mi.
                    Curabitur facilisis nec nisl sit amet congue. Nunc elementum
                    viverra leo non molestie.
                </p>
                <Titulo 
                    text={'Titulo h3'} 
                    type={HTML_TAG_TYPES.H3}
                />
                <p>
                    Vivamus consectetur leo ante, quis gravida arcu porta ac.
                </p>
                <Titulo 
                    text={'Titulo h3'} 
                    type={HTML_TAG_TYPES.H3}
                />
                <p>
                    Integer commodo est placerat, lacinia tellus sed, dapibus turpis.
                    Integer pulvinar metus ac purus lacinia faucibus.
                </p>
                <Titulo 
                    text={'Titulo h3'} 
                    type={HTML_TAG_TYPES.H3}
                />
                <p>
                    Morbi varius tortor dolor, scelerisque scelerisque lectus consectetur et.
                    Donec imperdiet consequat vehicula.
                </p>
            </main>
        </>*/
    )
}