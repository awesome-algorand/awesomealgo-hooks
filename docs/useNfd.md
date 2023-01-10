# `useNfd`

React hook to fetch NFD metadata from [NFD API](https://api-docs.nf.domains/)

## Usage

```jsx
import { useNfd } from 'awesomealgo-hooks';

const Demo = () => {
  const [nfd, nfds, error, refresh] = useNfd(
    'NRLA7VZ2YV6WOS2LBS3UK25DB463XRSNG63BYNQI6CSGGROFWVQ2EKBQSI',
    { network: 'mainnet' },
  );

  return (
    <div>
      <button onClick={refresh}>Refresh</button>
      <br />
      nfd: {nfd ? JSON.stringify(nfd) : 'loading...'}
      <br />
      nfds: {nfds ? `Contains ${nfds.length} NFDs` : 'loading...'}
      <br />
      error: {error ? JSON.stringify(error) : 'none'}
    </div>
  );
};
```

#### Call signature

```typescript
function useNfd = (address: string, settings: UseNfdSettings = defaultSettings): [NFD | null, NFD[] | null, any, () => void] ;
```

#### Types

```typescript
type UseNfdSettings = {
  network: 'mainnet' | 'testnet';
  [key: string]: any;
};

enum NFDSaleType {
  AUCTION = `auction`,
  BUYITNOW = `buyItNow`,
}

enum NFDCategory {
  CURATED = `curated`,
  PREMIUM = `premium`,
  COMMON = `common`,
}

enum NFDState {
  AVAILABLE = `available`,
  MINTING = `minting`,
  RESERVED = `reserved`,
  FORSALE = `forSale`,
  OWNED = `owned`,
}

type NFDProperties = {
  internal: { [key: string]: any };
  user_defined: { [key: string]: any };
  verified: { [key: string]: any };
  additional_properties: { [key: string]: any };
};

type NFD = {
  name: string;
  app_id: number;
  asa_id: number;
  avatar_outdated: boolean;
  ca_algo: string[];
  cache_control: string;
  category: NFDCategory;
  current_as_of_block: number;
  deposit_account: string;
  etag: string;
  meta_tags: string[];
  nfd_account: string;
  owner: string;
  properties: NFDProperties;
  reserved_for: string;
  sale_type: NFDSaleType;
  sell_amount: number;
  seller: string;
  sig_name_address: string;
  state: NFDState;
  tags: string[];
  time_changed: Date;
  time_created: Date;
  time_purchased: Date;
  unverified_ca: { [key: string]: any };
  unverified_ca_algo: string[];
  additional_properties: { [key: string]: any };
};
```
