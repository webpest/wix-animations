import React from 'react';
import CodeExample from '../../utils/Components/CodeExample';
import ExampleSequence from './ExampleSequence';
import ExampleSequenceRaw from '!raw-loader!./ExampleSequence';

import ExampleChildren from './ExampleChildren';
import ExampleChildrenRaw from '!raw-loader!./ExampleChildren';

import ExampleMixedChildren from './ExampleMixedChildren';
import ExampleMixedChildrenRaw from '!raw-loader!./ExampleMixedChildren';


const Sequence = () => {
  return (
    <div>
      <CodeExample title="Multiple Children"
                   code={ExampleChildrenRaw}>
        <ExampleChildren/>
      </CodeExample>
      <CodeExample title="Using the Sequence Prop"
                   code={ExampleSequenceRaw}>
        <ExampleSequence/>
      </CodeExample>
      <CodeExample title="Mount/Unmount of children simultaneously"
                   code={ExampleMixedChildrenRaw}>
        <ExampleMixedChildren/>
      </CodeExample>
    </div>);
};

export default Sequence;
