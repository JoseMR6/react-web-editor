import './TIndex.css'
import { Style } from './TStyle.jsx'
import { TMain } from './TMain'

export function TIndex() {
    return (
        <>
            <Style/>
            <div id='template-html'>
                <div id='template-body'>
                    <TMain/>
                </div>
            </div>
        </>
        
    )
}