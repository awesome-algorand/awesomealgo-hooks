# `useShortAddress`

React hook that shortens a wallet address string.

## Usage

```jsx
import { useShortAddress } from 'awesomealgo-hooks';

const Demo = () => {
  const shortAddress = useShortAddress('NRLA7VZ2YV6WOS2LBS3UK25DB463XRSNG63BYNQI6CSGGROFWVQ2EKBQSI');

  return (
    <div>
      shortened address: {shortAddress}
    </div>
  );
};
```

#### Call signature

```typescript
function useShortAddress = (address: string, width: number = 6): string ;
```
