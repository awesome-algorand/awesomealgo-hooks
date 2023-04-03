import { useShortAddress } from '../src';
import React from 'react';

type UseShortAddressDemoProps = {
  address: string;
};

export const UseShortAddressDemo = ({
  address = 'Set your address to check the short address',
}: UseShortAddressDemoProps) => {
  const shortAddress = useShortAddress(address);

  return (
    <div style={{ color: 'white' }}>
      <div>shortened address: {shortAddress} for width=6</div>
      <br />
      <div>original address: {shortAddress}</div>
    </div>
  );
};
