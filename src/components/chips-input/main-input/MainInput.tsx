import React, { useState } from 'react';
import { IChip } from '../../../types';
import { checkOpenQuotationMark } from '../../../utilst/checkOpenQuotationMark';
import { uniqId } from '../../../utilst/uniqId';
import './index.scss'

interface Props {
    setChips: React.Dispatch<React.SetStateAction<IChip[]>>;
    setShowErrorMessage: React.Dispatch<React.SetStateAction<boolean>>;
}

const MainInput: React.FC<Props> = ({ setChips, setShowErrorMessage }) => {
    const [valueInput, setValueInput] = useState<string>('')

    const [isOpenQuotationMark, setIsOpenQuotationMark] = useState<boolean>(false)


    const addValueToChips = (chip: string) => {
        setChips(prevChips => ([...prevChips, { chip, id: uniqId() }]))
        setValueInput('')
    }

    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;

        const lastLetter = value[value.length - 1]

        setIsOpenQuotationMark(checkOpenQuotationMark(value))

        if (value === ',') return

        if (lastLetter === ',' && !isOpenQuotationMark) {
            const chipsString = value.substring(0, value.length - 1)
            addValueToChips(chipsString)
        } else {
            setValueInput(value)
        }
    }

    const handleBlur = () => {
        if (isOpenQuotationMark) {
            setShowErrorMessage(true)
        } else {
            setShowErrorMessage(false)
            if (valueInput) addValueToChips(valueInput)
        }
    }

    return (

        <input type="text"
            className='MainInput'
            value={valueInput}
            onChange={handleChangeInput}
            onBlur={handleBlur}
            placeholder='Введите ключевые слова' />

    )
}

export default MainInput