import React, { useState } from 'react';

import ChipsInput from './components/chips-input/ChipsInput';

const App: React.FC = () => {
  const [value, setValue] = useState<string>('');

  return (
    <div className="App">
      <ChipsInput value={value} setValue={setValue} />
    </div>
  );
}

export default App;
