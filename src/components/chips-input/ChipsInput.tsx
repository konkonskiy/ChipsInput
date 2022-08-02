import React, { useEffect, useState } from 'react';
import './index.scss'

interface Props {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
}

const ChipsInput: React.FC<Props> = ({ setValue, value }) => {
    const [valueInput, setValueInput] = useState<string>('')
    const [chips, setChips] = useState<Array<string>>([])

    const [isOpenQuotationMark, setIsOpenQuotationMark] = useState<boolean>(false)
    const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false)

    const addValueToChips = (chipsString: string) => {
        setChips([...chips, chipsString])
        setValueInput('')
    }

    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;

        const lastLetter = value[value.length - 1]

        if (lastLetter === '"') {
            setIsOpenQuotationMark(!isOpenQuotationMark)
        }

        if (value === ',') return

        if (lastLetter === ',' && !isOpenQuotationMark) {
            const chipsString = value.substring(0, value.length - 1)
            addValueToChips(chipsString)
        } else {
            setValueInput(value)
        }
    }

    useEffect(() => {
        const str = [...chips, valueInput].join(',')
        setValue(str)
    }, [valueInput, chips])

    useEffect(() => {
        const splitArr = value.split(',')
        setChips(splitArr)
    }, [])

    const handleBlur = () => {
        if (isOpenQuotationMark) {
            setShowErrorMessage(true)
        } else {
            setShowErrorMessage(false)
            addValueToChips(valueInput)
        }
    }

    return (
        <div className='ChipsInput_wrapper'>
            <input type="text"
                className='ChipsInput_input'
                value={valueInput}
                onChange={handleChangeInput}
                onBlur={handleBlur} />
            {showErrorMessage && (<p className='ChipsInput_error'>Закройте кавычки с двух сторон</p>)}
        </div>
    )
}

export default ChipsInput