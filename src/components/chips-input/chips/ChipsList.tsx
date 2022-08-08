import React, { useEffect } from 'react';
import { IChip } from '../../../types';
import { createChipsFromString } from '../../../utilst/createChipsFromString';
import ChipsItem from './ChipsItem';
import './index.scss'

interface Props {
    chips: IChip[];
    setChips: React.Dispatch<React.SetStateAction<IChip[]>>;
}

const ChipsList: React.FC<Props> = ({ chips, setChips }) => {
    useEffect(() => {
        const handleRemoveSelected = (event: KeyboardEvent) => {
            const isDelete = event.key === "Backspace" || event.key === "Delete"
            if (!isDelete) return
            setChips(prevChips => prevChips.filter(({ isSelected }) => !isSelected))
        }

        document.addEventListener('keydown', handleRemoveSelected)

        return () => {
            document.removeEventListener('keydown', handleRemoveSelected)
        }
    }, [])
    
    if (!chips.length) {
        return null
    }

    const handleRemoveItem = (removeId: number) => {
        const newChips = chips.filter(({ id }) => id !== removeId)
        setChips(newChips)
    }

    const handleReplaceChip = (id: number) => (modifyedString: string) => {
        if (!modifyedString) {
            handleRemoveItem(id)
            return
        }

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

    const isChipSelected = (id: number): boolean =>
        Boolean(chips.filter(chip => chip.id === id && chip.isSelected))

    const handleSetSelcted = (id: number) => () => {
        if (!isChipSelected(id)) return

        setChips(chips.map(chip => {
            if (id === chip.id) {
                chip.isSelected = true
            }
            return chip
        }))
    }
    const handleSetUnselcted = (id: number) => () => {
        if (isChipSelected(id)) return

        setChips(chips.map(chip => {
            if (id === chip.id) {
                chip.isSelected = false
            }
            return chip
        }))
    }

    return (
        <ul className='ChipsList'>
            {chips.map(({ chip, id, isSelected }) => <ChipsItem key={id}
                chip={chip}
                handleReplaceChip={handleReplaceChip(id)}
                removeItem={() => handleRemoveItem(id)}
                handleSetSelcted={handleSetSelcted(id)}
                handleSetUnselcted={handleSetUnselcted(id)}
                isSelected={isSelected}
            />)}
        </ul>
    )
}

export default ChipsList