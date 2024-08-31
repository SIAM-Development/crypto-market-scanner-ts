# Crypto Market Scanner | TypeScript
*A library that can scan multiple markets across many crypto exchanges in a unified format. Build inTypeScript, uses the CCXT library for API requests.*

---

### Usage (WIP)

Initialize using an array of exchanges from the [list of supported exchanges](#list-of-supported-exchanges) , and an array of markets on those exchanges.
```js
import { MarketScanner } from 'crypto-market-scanner';
const exchanges = ['binance', 'kucoin'];
const markets = ['BTCUSDT'];
const Scanner = new MarketScanner(exchanges, markets);
```

When you start the scan, the class will fetch current market data for each exchange-market combination in parallel. This could take some time if you supply a lot of markets to scan, so be prepared to `await` the results.
```js
const fields = ['marketPrice', 'premium', 'volume'];
const results = await Scanner.getData(fields);
console.log(results);

// {
//   'binance': {
//                 'price': 60000.00,
//                 'premium': 0.001,
//                 'volume': 240000000
//               },
//    'kucoin': {...}
// }
```

Alternatively you can set the class to automatically scan the input markets periodically, and execute a callback when new results are available.
```js
const callback = (results) => console.log(results);
const refreshMs = 10000; // 10 sec
Scanner.auto(refreshMs, callback); // Runs cb on every refresh
```

### List of supported exchanges
- Binance (spot, futures)
- Kucoin
- ByBit
- BitMex
- Coinbase
- *More to be added later after verifying compatibility with CCXT API*
