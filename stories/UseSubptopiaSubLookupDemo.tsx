import * as React from 'react';
import { useSubtopiaSubLookup } from '../src';
import { ChainType } from '../src/misc/enums';
import { SubscriptionExpirationType, SubscriptionType } from '../src/misc/interfaces';

type UseSubptopiaSubLookupDemoProps = {
  address: string;
  smiId: number;
  expirationType: SubscriptionExpirationType;
};

export const UseSubptopiaSubLookupDemo = ({
  address = 'set your address ',
  smiId = 190521162,
  expirationType = SubscriptionExpirationType.MONTHLY,
}: UseSubptopiaSubLookupDemoProps) => {
  const [subscriptionRecord, error, refresh] = useSubtopiaSubLookup(
    address,
    smiId,
    expirationType,
    ChainType.TestNet,
  );

  return (
    <div style={{ color: 'white' }}>
      <button onClick={refresh}>Refresh</button>
      <br />
      <br />
      Subscription ID: {subscriptionRecord ? subscriptionRecord.subID : 'loading...'}
      <br />
      Subscription Type:{' '}
      {subscriptionRecord ? SubscriptionType[subscriptionRecord.subType] : 'loading...'}
      <br />
      Expiration Type:{' '}
      {subscriptionRecord
        ? SubscriptionExpirationType[subscriptionRecord.expirationType]
        : 'loading...'}
      <br />
      Created at:{' '}
      {subscriptionRecord?.createdAt ? subscriptionRecord.createdAt.toString() : 'loading...'}
      <br />
      <br />
      error: {error ? JSON.stringify(error) : 'none'}
    </div>
  );
};
