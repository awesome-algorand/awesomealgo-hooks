import { useEffect, useState } from 'react';
import { SubscriptionRecord } from '../misc/interfaces';
import { ChainType } from '../misc/enums';

const API_BASE_URL = `https://api.subtopia.io/api/v1`;

const getSubscriptionEndpoint = () => {
  return `${API_BASE_URL}/subscription/record`;
};

const fetchSubscriptionRecord = async (address: string, smiId: number, chain: ChainType) => {
  try {
    const url = getSubscriptionEndpoint();
    const response = await fetch(
      url +
        '?' +
        new URLSearchParams({
          subscriber_address: address,
          smi_id: smiId.toString(),
          chain: chain,
        }),
    );
    const data = (await response.json()) as SubscriptionRecord | null;

    return data;
  } catch (error: any) {
    throw new Error(`Failed to fetch Subscription Record: ${error.message}`);
  }
};

const useSubscriptionLookup = (
  address: string,
  smiId: number,
  chain: ChainType,
): [SubscriptionRecord | null, any, () => void] => {
  const [subscriptionRecord, setSubscriptionRecord] = useState<SubscriptionRecord | null>(null);
  const [error, setError] = useState<any | null>(null);

  useEffect(() => {
    fetchSubscriptionRecord(address, smiId, chain)
      .then((data) => {
        setSubscriptionRecord(data);
      })
      .catch((error: any) => {
        setError(error);
      });
  }, [address, smiId, chain]);

  const refresh = () => {
    setSubscriptionRecord(null);
    setError(null);
  };

  return [subscriptionRecord, error, refresh];
};

export default useSubscriptionLookup;
