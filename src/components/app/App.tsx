import React, { useState } from 'react';
import './index.scss'

import ChipsInput from '../chips-input/ChipsInput';

const App: React.FC = () => {
  const [value, setValue] = useState<string>('test,test2');

  return (
    <div className="App">
      <h4 className='App_title'>Пример использования готового компонента</h4>
      <p className='App_text'>Строковое представление: {value}</p>
      <ChipsInput value={value} setValue={setValue} />
    </div>
  );
}

export default App;
