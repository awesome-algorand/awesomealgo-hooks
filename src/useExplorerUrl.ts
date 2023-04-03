import { useState, useEffect } from 'react';
import { ExplorerUrlType, ChainType, ExplorerType } from './misc/enums';
import { ALGOEXPLORER_URL, ALGOSCAN_URL } from './misc/constants';

const explorerDefaultUrlPathMapping = (type: string) => {
  switch (type) {
    case ExplorerUrlType.Transaction:
      return `tx`;
    case ExplorerUrlType.Address:
      return `address`;
    case ExplorerUrlType.Asset:
      return `asset`;
    case ExplorerUrlType.Application:
      return `application`;
    default:
      return ``;
  }
};

const explorerBaseUrlMapping = (type: ExplorerType, chain: ChainType) => {
  switch (type) {
    case ExplorerType.AlgoExplorer:
      return ALGOEXPLORER_URL(chain);
    case ExplorerType.AlgoScan:
      return ALGOSCAN_URL(chain);
    default:
      return ``;
  }
};

function useExplorerUrl(
  chain: ChainType,
  input: string | number,
  type: ExplorerUrlType,
  explorerType: ExplorerType = ExplorerType.AlgoScan,
) {
  const [url, setUrl] = useState('');

  useEffect(() => {
    const assembledUrl = `${explorerBaseUrlMapping(
      explorerType,
      chain,
    )}/${explorerDefaultUrlPathMapping(type)}/${input}`;
    setUrl(assembledUrl);
  }, [chain, input, type, explorerType]);

  return url;
}

export default useExplorerUrl;
