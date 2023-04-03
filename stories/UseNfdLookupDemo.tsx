import * as React from 'react';
import { useNfdLookup } from '../src';

type UseNfdDemoProps = {
  address: string;
};

export const UseNfdDemo = ({ address = 'set your address ' }: UseNfdDemoProps) => {
  const [nfd, nfds, error, refresh] = useNfdLookup(address, { network: 'mainnet' });

  return (
    <div style={{ color: 'white' }}>
      <button onClick={refresh}>Refresh</button>
      <br />
      <img
        src={nfd && nfd.properties.userDefined ? nfd.properties.userDefined.avatar : ''}
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
