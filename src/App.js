import React from 'react';
import JsonToReactFormBuilder from './lib/JsonToReactFormBuilder';
import jsonFile from './jsonFile.json';
function App() {
  const onSubmit = () => {
    console.log('submitted');
  };
  return <JsonToReactFormBuilder jsonFile={jsonFile} onSubmit={onSubmit} action={'save'}/>;
}

export default App;
