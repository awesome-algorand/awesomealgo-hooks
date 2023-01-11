import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { useShortAddress } from '../src';
import ShowDocs from './util/ShowDocs';

const Demo = () => {
  const address = 'NRLA7VZ2YV6WOS2LBS3UK25DB463XRSNG63BYNQI6CSGGROFWVQ2EKBQSI';
  const shortAddress = useShortAddress(address);

  return (
    <div>
      <div>shortened address: {shortAddress} for width=6</div>
      <br />
      <div>original address: {shortAddress}</div>
    </div>
  );
};

storiesOf('Helpers/useShortAddress.story', module)
  .add('Docs', () => <ShowDocs md={require('../docs/useShortAddress.md')} />)
  .add('Demo', () => <Demo />);
