import React from 'react';
import { IChip } from '../../../types';
import ChipsItem from './ChipsItem';
import './index.scss'

interface Props {
    chips: IChip[];
    setChips: React.Dispatch<React.SetStateAction<IChip[]>>;
}

const ChipsList: React.FC<Props> = ({ chips, setChips }) => {
    if (!chips.length) {
        return null
    }

    const handleRemoveItem = (removeId: number) => {
        const newChips = chips.filter(({id})=> id !== removeId)
        setChips(newChips)
    }

    return (
        <ul className='ChipsList'>
            {chips.map(({chip, id}) => <ChipsItem key={id} chip={chip}
                removeItem={() => handleRemoveItem(id)} />)}
        </ul>
    )
}

export default ChipsList