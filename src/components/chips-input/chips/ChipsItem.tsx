import React, { CSSProperties, useEffect, useRef, useState } from 'react';
import { ReactComponent as CrossSvg } from '../../../icons/cross.svg'

interface Props {
    chip: string;
    removeItem: () => void
    handleSetSelcted: () => void
    handleSetUnselcted: () => void
    handleReplaceChip: (modifyedString: string) => void
    isSelected: boolean
}

const ChipsItem: React.FC<Props> = ({ chip, removeItem, handleReplaceChip, handleSetSelcted,handleSetUnselcted, isSelected }) => {
    const [isShowInput, setIsShowInput] = useState<boolean>(false)
    const [focus, setFocus] = useState<boolean>(false)
    const [value, setValue] = useState<string>(chip)
    const [width, setWidth] = useState<number>(0);

    const span: React.LegacyRef<HTMLSpanElement> = useRef(null);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // TODO сделать ошибку на кол-во символов
        setValue(event.target.value)
    }

    useEffect(() => {
        if (span) {
            // TODO NEEDED REFACTORING
            // @ts-ignore
            setWidth(span.current.offsetWidth);
        }
    }, [value]);

    const handleShowInput = (event: React.MouseEvent<HTMLLIElement>) => {
        if (event.buttons === 1) {
            handleSetSelcted()
        } else {
            handleSetUnselcted()
            setIsShowInput(true)
        }
    }
    const handleHideInput = () => { if (!focus) setIsShowInput(false) }
    const handleSetFocus = () => { setFocus(true) }
    const handleBlur = () => {
        setFocus(false)
        setIsShowInput(false)
        if (value !== chip) handleReplaceChip(value)
    }

    // TODO NEEDED REFACTORING
    const hideStyle: CSSProperties = {
        position: 'absolute',
        visibility: 'hidden'
    }

    const className = `ChipsItem ${isSelected ? 'ChipsItem__selected' : ''}`

    return (
        <li
            className={className}
            onMouseOver={handleShowInput}
            onMouseOut={handleHideInput}
        >
            {isShowInput && (
                <input
                    className='ChipsItem_input'
                    type="text"
                    style={{ width: `${width}px` }}
                    value={value}
                    onChange={handleInputChange}
                    onFocus={handleSetFocus}
                    onBlur={handleBlur}
                />
            )}
            <span
                className='ChipsItem_text'
                ref={span}
                style={isShowInput ? hideStyle : undefined}
            >
                {value}
            </span>
            <button type="button" className='ChipsItem_btn' onClick={removeItem}>
                <CrossSvg />
            </button>
        </li >
    )
}

export default ChipsItem