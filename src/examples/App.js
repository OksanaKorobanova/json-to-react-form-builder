import React from 'react';
import { JsonToReactFormBuilder } from '../lib';
import file from './jsonFile.json';
function App() {
  const onSubmit = () => {
    console.log('submitted');
  };
  const onCancel = () => {
    console.log('canceled');
  };
  const configStyles = {
    domain: {
      background: 'red',
    },
  };
  const configGrid = {
    domain: {
      container: {
        xs: 12,
        md: 6,
      },
      item: {
        xs: 12,
        md: 6,
      },
    },
  };
  return (
    <JsonToReactFormBuilder
      jsonFile={file}
      onSubmit={onSubmit}
      onCancel={onCancel}
      action={'save'}
      configStyles={configStyles}
      configGrid={configGrid}
    />
  );
}

export default App;
