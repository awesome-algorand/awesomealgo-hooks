import * as React from 'react';
import { useSubtopiaSubLookup } from '../src';
import { ChainType } from '../src/misc/enums';

type UseSubptopiaSubLookupDemoProps = {
  address: string;
  smiId: number;
};

export const UseSubptopiaSubLookupDemo = ({
  address = 'set your address ',
  smiId = 168195159,
}: UseSubptopiaSubLookupDemoProps) => {
  const [subscriptionRecord, error, refresh] = useSubtopiaSubLookup(
    address,
    smiId,
    ChainType.TestNet,
  );

  return (
    <div style={{ color: 'white' }}>
      <button onClick={refresh}>Refresh</button>
      <br />
      nfd: {subscriptionRecord ? subscriptionRecord.sub_id : 'loading...'}
      <br />
      nfd content: {subscriptionRecord ? subscriptionRecord.sub_type : 'loading...'}
      <br />
      <br />
      nfds: {subscriptionRecord?.created_at ? subscriptionRecord.created_at : 'loading...'}
      <br />
      <br />
      error: {error ? JSON.stringify(error) : 'none'}
    </div>
  );
};
