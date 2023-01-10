export type UseNfdSettings = {
  network: 'mainnet' | 'testnet';
  [key: string]: any;
};

export enum NFDSaleType {
  AUCTION = `auction`,
  BUYITNOW = `buyItNow`,
}

export enum NFDCategory {
  CURATED = `curated`,
  PREMIUM = `premium`,
  COMMON = `common`,
}

export enum NFDState {
  AVAILABLE = `available`,
  MINTING = `minting`,
  RESERVED = `reserved`,
  FORSALE = `forSale`,
  OWNED = `owned`,
}

export type NFDProperties = {
  internal: { [key: string]: any };
  user_defined: { [key: string]: any };
  verified: { [key: string]: any };
  additional_properties: { [key: string]: any };
};

export type NFD = {
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
