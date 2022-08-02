import React from 'react';
import './index.scss'

interface Props {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
}

const ChipsInput: React.FC<Props> = ({ setValue, value }) => {
    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    return (
        <div className='ChipsInput_wrapper'>
            <input type="text" className='ChipsInput_input' value={value} onChange={handleChangeInput} />
        </div>
    )
}

export default ChipsInput