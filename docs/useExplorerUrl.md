# `useExplorerUrl`

React hook that generates an explorer URL based on the given chain, input, type, and explorer type.

## Usage

```jsx
import { useExplorerUrl } from 'LIBRARY_NAME';
import { ExplorerUrlType, ChainType, ExplorerType } from 'PATH_TO_MISC_ENUMS';

const Demo = () => {
  const explorerUrl = useExplorerUrl(
    ChainType.MainNet,
    'ADDRESS_OR_TX_ID',
    ExplorerUrlType.Transaction,
    ExplorerType.AlgoScan,
  );

  return <div>Explorer URL: {explorerUrl}</div>;
};
```

## Call signature

```jsx
function useExplorerUrl = (
  chain: ChainType,
  input: string | number,
  type: ExplorerUrlType,
  explorerType: ExplorerType = ExplorerType.AlgoScan,
): string;
```
