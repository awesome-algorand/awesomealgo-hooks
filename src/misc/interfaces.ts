export interface UseNfdSettings {
  network: 'mainnet' | 'testnet';
  [key: string]: any;
}

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

export interface NFDProperties {
  internal: { [key: string]: any };
  userDefined: { avatar?: string; [key: string]: any };
  verified: { [key: string]: any };
  additionalProperties: { [key: string]: any };
}

export interface NFD {
  name: string;
  appID: number;
  asaID: number;
  avatarOutdated: boolean;
  caAlgo: string[];
  cacheControl: string;
  category: NFDCategory;
  currentAsOfBlock: number;
  depositAccount: string;
  etag: string;
  metaTags: string[];
  nfdAccount: string;
  owner: string;
  properties: NFDProperties;
  reservedFor: string;
  saleType: NFDSaleType;
  sellAmount: number;
  seller: string;
  sigNameAddress: string;
  state: NFDState;
  tags: string[];
  timeChanged: Date;
  timeCreated: Date;
  timePurchased: Date;
  unverifiedCa: { [key: string]: any };
  unverifiedCaAlgo: string[];
  additionalProperties: { [key: string]: any };
}

enum SubscriptionType {
  UNLIMITED = 0,
  MONTHLY = 1,
  ANNUAL = 2,
}

export interface SubscriptionRecord {
  created_at: string; // Use string type to represent datetime in ISO format
  expires_at: string | null; // Use string type to represent datetime in ISO format
  sub_id: number;
  sub_type: SubscriptionType;
}
