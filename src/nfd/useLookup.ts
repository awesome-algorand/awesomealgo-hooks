import { useEffect, useState } from 'react';
import { NFD, UseNfdSettings } from '../misc/interfaces';

const NFD_MAINNET = `https://api.nf.domains`;
const NFD_TESTNET = `https://api.testnet.nf.domains`;

const getNfdEndpoint = (network: 'mainnet' | 'testnet') => {
  const baseUrl = network.toLowerCase() === `mainnet` ? NFD_MAINNET : NFD_TESTNET;
  return baseUrl + `/nfd?`;
};

const defaultSettings: UseNfdSettings = {
  network: `testnet`,
};

let cache: NFD[] | null = null;

const fetchNFD = async (address: string, settings: UseNfdSettings = defaultSettings) => {
  try {
    const url = getNfdEndpoint(settings.network);
    const response = await fetch(
      url +
        new URLSearchParams({
          owner: address,
        }),
    );
    const data = ((await response.json()) as NFD[]) ?? [];

    return data;
  } catch (error: any) {
    throw new Error(`Failed to fetch NFD: ${error.message}`);
  }
};

const useLookup = (
  address: string,
  settings: UseNfdSettings = defaultSettings,
): [NFD | null, NFD[] | null, any, () => void] => {
  const [prevAddress, setPrevAddress] = useState<string | null>(null);
  const [nfds, setNFDs] = useState<NFD[] | null>(null);
  const [error, setError] = useState<any | null>(null);

  useEffect(() => {
    if (cache && prevAddress === address) {
      setNFDs(cache);
    } else {
      fetchNFD(address, settings)
        .then((data) => {
          console.log(data);
          cache = data;
          setNFDs(data);
          setPrevAddress(address);
        })
        .catch((error: any) => {
          setError(error);
        });
    }
  }, [address, prevAddress, settings]);

  const refresh = () => {
    setNFDs(null);
    setError(null);
    cache = null;
  };

  return [nfds && nfds.length > 0 ? nfds[0] : null, nfds, error, refresh];
};

export default useLookup;
