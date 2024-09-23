import './TMain.css'

export function TMain() {
    return (
        <>
            <main id='template-main'>
                <h1>Titulo h1</h1>
                <h2>Titulo h2</h2>
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
                <hr/>
                <h2>Titulo h2</h2>
                <p>
                    Aenean lacus turpis, facilisis eu cursus in, posuere posuere mi.
                    Curabitur facilisis nec nisl sit amet congue. Nunc elementum
                    viverra leo non molestie.
                </p>
                <h3>Titulo h3</h3>
                <p>
                    Vivamus consectetur leo ante, quis gravida arcu porta ac.
                </p>
                <h3>Titulo h3</h3>
                <p>
                    Integer commodo est placerat, lacinia tellus sed, dapibus turpis.
                    Integer pulvinar metus ac purus lacinia faucibus.
                </p>
                <h3>Titulo h3</h3>
                <p>
                    Morbi varius tortor dolor, scelerisque scelerisque lectus consectetur et.
                    Donec imperdiet consequat vehicula.
                </p>
            </main>
        </>
    )
}