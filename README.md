# qwuery

Flexible query string parser with support for nesting.

## Installation

```bash
# Install through NPM
$ npm install --save qwuery
```

## Usage

```typescript
import * as qwuery from "qwuery";

const query = qweury.decode("?one[two][three]=one,two");
expect(query).toEqual({ one: { two: { three: ["one", "two"] } } });
```
