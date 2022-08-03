import React, { useEffect, useState } from 'react';
import { IChip } from '../../types';
import ErrorMessage from '../error-message/ErrorMessage';
import ChipsList from './chips/ChipsList';
import MainInput from './main-input/MainInput';
import './index.scss'
import { createChipsFromString } from '../../utilst/createChipsFromString';

interface Props {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
}

const ChipsInput: React.FC<Props> = ({ setValue, value }) => {
    const [chips, setChips] = useState<Array<IChip>>([])

    const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false)

    useEffect(() => {
        const chipsString = chips.map(({chip})=> chip).join(',')
        setValue(chipsString)
    }, [chips])

    useEffect(() => {
        if (!value) return
        const splitArr = createChipsFromString(value)
        setChips(splitArr)
    }, [])

    return (
        <>
            <div className='ChipsInput_wrapper'>
                <ChipsList chips={chips} setChips={setChips} />
                <MainInput setChips={setChips} setShowErrorMessage={setShowErrorMessage} />
            </div>
            <ErrorMessage showErrorMessage={showErrorMessage} />
        </>
    )
}

export default ChipsInput