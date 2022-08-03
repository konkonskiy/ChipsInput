import React from 'react';
import './index.scss'

interface Props {
    showErrorMessage: boolean;
}

const ErrorMessage: React.FC<Props> = ({ showErrorMessage }) => {
    if (!showErrorMessage) {
        return null
    }

    return (
        <span className='ErrorMessage'>Закройте кавычки с двух сторон</span>
    )
}

export default ErrorMessage