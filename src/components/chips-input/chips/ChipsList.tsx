import React from 'react';
import { IChip } from '../../../types';
import { createChipsFromString } from '../../../utilst/createChipsFromString';
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
        const newChips = chips.filter(({ id }) => id !== removeId)
        setChips(newChips)
    }

    const handleReplaceChip = (id: number)  => (modifyedString:string) => {
        let modifyedChips = []
        if (modifyedString.includes(",")) {
            const newChips = createChipsFromString(modifyedString)

            const indexModifyedChip = chips.findIndex(chip => chip.id === id)

            modifyedChips = [...chips]
            modifyedChips.splice(indexModifyedChip, 1, ...newChips) 

        } else {
            modifyedChips = chips.map(chip => {
                if (chip.id === id) {
                    chip.chip = modifyedString
                }
                return chip
            })
        }
        setChips(modifyedChips)
    }

    return (
        <ul className='ChipsList'>
            {chips.map(({ chip, id }) => <ChipsItem key={id}
                chip={chip}
                handleReplaceChip={handleReplaceChip(id)}
                removeItem={() => handleRemoveItem(id)} />)}
        </ul>
    )
}

export default ChipsList