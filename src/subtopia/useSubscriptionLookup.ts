import { useEffect, useState } from 'react';
import { SubscriptionExpirationType, SubscriptionRecord } from '../misc/interfaces';
import { ChainType } from '../misc/enums';

const API_BASE_URL = `https://api.subtopia.io/api/v1`;

const getSubscriptionEndpoint = () => {
  return `${API_BASE_URL}/subscription/record`;
};

const fetchSubscriptionRecord = async (
  address: string,
  smiId: number,
  expirationType: SubscriptionExpirationType,
  chain: ChainType,
) => {
  try {
    const url = getSubscriptionEndpoint();
    const response = await fetch(
      url +
        '?' +
        new URLSearchParams({
          subscriber_address: address,
          smi_id: smiId.toString(),
          expiration_type: String(expirationType),
          chain: chain,
        }),
    );
    let data = await response.json();
    data = {
      createdAt: data['created_at'],
      expiresAt: data['expires_at'],
      expirationType: data['expiration_type'],
      subID: data['sub_id'],
      subType: data['sub_type'],
    } as SubscriptionRecord;

    return data;
  } catch (error: any) {
    throw new Error(`Failed to fetch Subscription Record: ${error.message}`);
  }
};

const useSubscriptionLookup = (
  address: string,
  smiId: number,
  expirationType: SubscriptionExpirationType,
  chain: ChainType,
): [SubscriptionRecord | null, any, () => void] => {
  const [subscriptionRecord, setSubscriptionRecord] = useState<SubscriptionRecord | null>(null);
  const [error, setError] = useState<any | null>(null);

  useEffect(() => {
    fetchSubscriptionRecord(address, smiId, expirationType, chain)
      .then((data) => {
        setSubscriptionRecord(data);
      })
      .catch((error: any) => {
        setError(error);
      });
  }, [address, smiId, chain, expirationType]);

  const refresh = () => {
    setSubscriptionRecord(null);
    setError(null);
  };

  return [subscriptionRecord, error, refresh];
};

export default useSubscriptionLookup;
