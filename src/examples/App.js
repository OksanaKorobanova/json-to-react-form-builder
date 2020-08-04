import React from 'react';
import { JsonToReactFormBuilder } from '../lib';
import file from './jsonFile.json';
function App() {
  const onSubmit = () => {
    console.log('submitted');
  };
  return (
    <JsonToReactFormBuilder
      jsonFile={file}
      onSubmit={onSubmit}
      action={'save'}
    />
  );
}

export default App;
