import React from 'react';
import { ReactComponent as CrossSvg } from '../../../icons/cross.svg'

interface Props {
    chip: string;
    removeItem: () => void
}

const ChipsItem: React.FC<Props> = ({ chip, removeItem }) => {

    return (
        <li className='ChipsItem'>
            <span className='ChipsItem_text'>{chip}</span>
            <button type="button" className='ChipsItem_btn' onClick={removeItem}><CrossSvg /></button>
        </li>
    )
}

export default ChipsItem