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

export enum SubscriptionType {
  UNLIMITED = 0,
  TIME_BASED = 1,
}

export enum SubscriptionExpirationType {
  UNLIMITED = 0,
  MONTHLY = 1,
  QUARTERLY = 2,
  SEMI_ANNUAL = 3,
  ANNUAL = 4,
}

export interface SubscriptionRecord {
  createdAt: Date;
  expiresAt: Date | undefined;
  expirationType: SubscriptionExpirationType;
  subID: number;
  subType: SubscriptionType;
}
