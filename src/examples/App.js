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
    btnContainer: {
      justifyContent: 'center',
    },
  };
  const configGrid = {
    template: {
      container: {
        xs: 12,
        sm: 12,
        md: 12,
      },
      item: {
        xs: 12,
        sm: 12,
        md: 6,
      },
    },
  };
  return (
    <JsonToReactFormBuilder
    jsonFile={file}
    onSubmit={onSubmit}
    onCancel={onCancel}
    actionCancel={'cancel'}
    action={'save'}
    configStyles={configStyles}
    configGrid={configGrid}
    />
  );
}

export default App;
