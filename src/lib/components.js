import React from 'react';
import RadioGroupBlock from './components/RadioGroupBlock';
import ComponentsList from './components/ComponentsList';

const Components = {
  'radio-group': RadioGroupBlock,
  list: ComponentsList,
  // check: Bar,
  // text: Bar,
  // number: Bar,
};

export default (block, state, handleChangeState, handleChangeStateEvent) => {
  // component does exist
  if (typeof Components[block.component] !== 'undefined') {
    return React.createElement(Components[block.component], {
      property: block.attributes.name,
      block: block,
      state: state,
      handleChangeState: handleChangeState,
      handleChangeStateEvent: handleChangeStateEvent,
    });
  }
  // component doesn't exist yet
  return React.createElement(
    () => <div>The component {block.component} has not been created yet.</div>,
    { property: block.attributes.name }
  );
};
