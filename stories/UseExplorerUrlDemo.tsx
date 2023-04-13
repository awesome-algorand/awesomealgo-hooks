import { useExplorerUrl } from '../src';
import React from 'react';
import { ExplorerUrlType, ChainType, ExplorerType } from '../src/misc/enums';

type UseExplorerUrlDemoProps = {
  address: string;
  assetId?: number;
  transactionId?: string;
  applicationId?: number;
  explorerType?: ExplorerType;
};

export const UseExplorerUrlDemo = ({
  address = 'Set your address to check the short address',
  assetId = 1060587336,
  transactionId = 'OSVENOIE5QALLGJLSYAWZXBMLPJRY2A22VXUWIF6QJJOPC6XD56A',
  applicationId = 1067289273,
  explorerType = ExplorerType.AlgoScan,
}: UseExplorerUrlDemoProps) => {
  const addressUrl = useExplorerUrl(
    ChainType.MainNet,
    address,
    ExplorerUrlType.Address,
    explorerType,
  );
  const assetUrl = useExplorerUrl(ChainType.MainNet, assetId, ExplorerUrlType.Asset, explorerType);
  const transactionUrl = useExplorerUrl(
    ChainType.MainNet,
    transactionId,
    ExplorerUrlType.Transaction,
    explorerType,
  );
  const applicationUrl = useExplorerUrl(
    ChainType.MainNet,
    applicationId,
    ExplorerUrlType.Application,
    explorerType,
  );

  return (
    <div style={{ color: 'white' }}>
      Click on the links below to check the address
      <br />
      <a target="_blank" rel="noreferrer" href={addressUrl}>
        {addressUrl}
      </a>
      <br /> <br />
      {assetId && (
        <>
          Click on the links below to check the asset
          <br />
          <a target="_blank" rel="noreferrer" href={assetUrl}>
            {assetUrl}
          </a>
          <br /> <br />
        </>
      )}
      {transactionId && (
        <>
          Click on the links below to check the transaction
          <br />
          <a target="_blank" rel="noreferrer" href={transactionUrl}>
            {transactionUrl}
          </a>
          <br /> <br />
        </>
      )}
      {applicationId && (
        <>
          Click on the links below to check the application
          <br />
          <a target="_blank" rel="noreferrer" href={applicationUrl}>
            {applicationUrl}
          </a>
        </>
      )}
    </div>
  );
};
