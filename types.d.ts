// Results wrapper for scans
export interface ScanData {
  exchanges: Array<ExchangeData>;
}

// Individual exchange data from scans
export interface ExchangeData {
  name: String;
  markets: Array<MarketData>;
}

// Individual market data from scans
export interface MarketData {
  symbol: String;
  type: 'spot' | 'futures';
  price: Number;
  volume: Number;
  fees: {
    taker: Number;
    maker: Number;
  };
  premium: Number;
}

// Base class interface
export interface MarketScanner {
  markets: Array<string>;
  exchanges: Array<string>;
  marketData: ScanData;
  isAutoScan: Bool;
  autoScanInterval: Null | Number;
  autoScanPeriodMs: Number;
  getMarketData: Function<> : Promise<ScanData>;
  autoScan: Function<Number> : Number;
  stopAutoScan: Function<> : Bool;
}
