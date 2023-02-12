import React from 'react'
import Color from './Color'

function Palette({onColorClick}) {
    return (
        <div className="palette">
            <a onMouseEnter={() => onColorClick('#5f11c5')}><Color color='#5f11c5' /></a>
            <a onMouseEnter={() => onColorClick('#11c556')}><Color color='#11c556' /></a>
            <a onMouseEnter={() => onColorClick('#b215c0')}><Color color='#b215c0' /></a>
            <a onMouseEnter={() => onColorClick('#ddda1d')}><Color color='#ddda1d' /></a>
        </div>
    )
}

export default Palette
