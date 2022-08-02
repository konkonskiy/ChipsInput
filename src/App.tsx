import React, { useState } from 'react';

import ChipsInput from './components/chips-input/ChipsInput';

const App: React.FC = () => {
  const [value, setValue] = useState<string>('test,tets');

  return (
    <div className="App">
      <h4>Пример использования готового компонента</h4>
      <ChipsInput value={value} setValue={setValue} />
      <div>Строковое представление: {value}</div>
    </div>
  );
}

export default App;
