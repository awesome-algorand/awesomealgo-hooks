# `useSubscriptionLookup`

React hook that fetches a subscription record based on the given address, SMI ID, and chain type.

## Usage

```jsx
import { useSubscriptionLookup } from 'LIBRARY_NAME';
import { ChainType } from 'PATH_TO_MISC_ENUMS';

const Demo = () => {
  const [subscriptionRecord, error, refresh] = useSubscriptionLookup(
    'ADDRESS',
    SMI_ID,
    ChainType.MainNet,
  );

  return (
    <div>
      {error ? (
        <div>Error: {error.message}</div>
      ) : (
        <div>Subscription Record: {JSON.stringify(subscriptionRecord)}</div>
      )}
      <button onClick={refresh}>Refresh</button>
    </div>
  );
};
```

## Call signature

```jsx
function useSubscriptionLookup = (
  address: string,
  smiId: number,
  chain: ChainType,
): [SubscriptionRecord | null, any, () => void];
```
