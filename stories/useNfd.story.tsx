import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { useNfd } from '../src';
import ShowDocs from './util/ShowDocs';

const Demo = () => {
  const [nfd, nfds, error, refresh] = useNfd(
    'R6YMHB4DIZIPYK2BV3TR4CD57CJZDLISTWKN5XMY7X7TCFACZIAOK5I4RM',
    { network: 'mainnet' },
  );

  return (
    <div>
      <button onClick={refresh}>Refresh</button>
      <br />
      <img
        src={nfd ? nfd.properties.userDefined.avatar : ''}
        alt="icon"
        width={'250px'}
        height={'250px'}
      />
      <br />
      nfd: {nfd ? nfd.name : 'loading...'}
      <br />
      nfd content: {nfd ? JSON.stringify(nfd) : 'loading...'}
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
