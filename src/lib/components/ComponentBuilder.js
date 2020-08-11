import React from 'react';
import RadioGroupBlock from './blockTypes/RadioGroupBlock';
import ComponentsList from './blockTypes/ComponentsList';
import SelectBlock from './blockTypes/SelectBlock';

const components = {
  'radio-group': RadioGroupBlock,
  list: ComponentsList,
  // check: Bar,
  // text: Bar,
  // number: Bar,
  select: SelectBlock,
};

export default (block) => {
  // component does exist
  if (typeof components[block.component] !== 'undefined') {
    return React.createElement(components[block.component], {
      block: block,
    });
  }

  // component doesn't exist yet
  return React.createElement(() => (
    <div>The component {block.component} has not been created yet.</div>
  ));
};
