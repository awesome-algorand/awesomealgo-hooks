import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { useNfd } from '../src';
import ShowDocs from './util/ShowDocs';

const Demo = () => {
  const [nfd, nfds, error, refresh] = useNfd(
    'NRLA7VZ2YV6WOS2LBS3UK25DB463XRSNG63BYNQI6CSGGROFWVQ2EKBQSI',
    { network: 'mainnet' },
  );

  return (
    <div>
      <button onClick={refresh}>Refresh</button>
      <br />
      <br />
      nfd: {nfd ? JSON.stringify(nfd) : 'loading...'}
      <br />
      <br />
      nfds: {nfds ? `Contains ${nfds.length} NFDs` : 'loading...'}
      <br />
      <br />
      error: {error ? JSON.stringify(error) : 'none'}
    </div>
  );
};

storiesOf('Integrations/useNfd.story', module)
  .add('Docs', () => <ShowDocs md={require('../docs/useNfd.md')} />)
  .add('Demo', () => <Demo />);
