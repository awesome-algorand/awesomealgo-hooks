import { ChainType } from './enums';

const buildExplorerUrl = (chain: ChainType, prefix: string, domain: string) => {
  const isMainnet = chain.toLowerCase() === 'mainnet';
  const baseUrl = isMainnet ? '' : 'testnet.';
  return `https://${prefix}${baseUrl}${domain}`;
};

export const ALGOEXPLORER_INDEXER_URL = (chain: ChainType) =>
  buildExplorerUrl(chain, 'algoindexer.', 'algoexplorerapi.io');

export const ALGOEXPLORER_API_URL = (chain: ChainType) =>
  buildExplorerUrl(chain, 'node.', 'algoexplorerapi.io');

export const ALGOEXPLORER_URL = (chain: ChainType) =>
  buildExplorerUrl(chain, '', 'algoexplorer.io');

export const ALGOSCAN_URL = (chain: ChainType) => buildExplorerUrl(chain, '', 'algoscan.app');
