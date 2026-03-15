# RandomMT

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A random number generator based on the Mersenne Twister algorithm.

## Source

- [Mersenne Twister summary - Statisticians' Forest](https://www.hello-statisticians.com/explain-terms-cat/mersenne_twister1.html)

## Features

- Implements the Mersenne Twister algorithm for generating random numbers
- Provides a constructor to initialize the random number generator with a seed value

## Usage

To use the RandomMT class:

1. Import the `RandomMT` class from the `RandomMT.js` file.
2. Create a new instance of the `RandomMT` class, optionally passing in a seed value.
3. Call the `getValue()` method to generate a new random number.

Example:

```javascript
import { RandomMT } from './RandomMT.js';

const r = new RandomMT(0);
console.log(r.getValue()); // Output a random number
```

## Testing

The project includes a test suite in the `RandomMT.test.js` file, which can be run using the Deno testing framework.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.