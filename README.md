# Number Label
[![Node](https://img.shields.io/node/v/numberlabel.svg?style=flat-square)](https://npmjs.org/package/numberlabel)
[![Version](https://img.shields.io/npm/v/numberlabel.svg?style=flat-square)](https://npmjs.org/package/numberlabel)
[![Downloads](https://img.shields.io/npm/dt/numberlabel.svg?style=flat-square)](https://npmjs.org/package/numberlabel)
[![Travis](https://img.shields.io/travis/TiagoDanin/Number-Label.svg?branch=master&style=flat-square)](https://travis-ci.org/TiagoDanin/Number-Label)

Convert a large number to nice formatted string.

## Features
- No dependencies
- Easy to Use
- Use the International System of Units (SI)

## Installation
Module available through the
[npm registry](https://www.npmjs.com/). It can be installed using the
[`npm`](https://docs.npmjs.com/getting-started/installing-npm-packages-locally)
or
[`yarn`](https://yarnpkg.com/en/)
command line tools.

```sh
# NPM
npm install numberlabel --save
# Or Using Yarn
yarn add numberlabel
```

## Usage
```js
const label = require('numberlabel')

//Amounts
label.amounts //[{pow, name, symbo, prefix...

//Convert(number, type[prefix, symbol, prefix], {start: 0, toFixed: 2})
label.convert(1567000, 'name') //''1.57 Million'
label.convert(1567000, 'symbol') //'1.27M'
label.convert(1567000, 'prefix') //'1.57 Mega'

label.convert(100, 'prefix', {start: 500}) //'100'
label.convert(100, 'prefix', {start: 500, toFixed: 4}) //'1.0000'
label.convert(100, 'prefix', {start: 500, toFixed: 4}) //'7.0000 Hecto'

label.convert(0.00101) //'1.01 Thousandth'

//getLabel(number, {start: 0, toFixed: 2, type: type[prefix, symbol, prefix]})
label.getLabel(100, {type: 'prefix'}) //{number:'1.00', pow: 2,...

```

## Tests
To run the test suite, first install the dependencies, then run `test`:

```sh
# NPM
npm test
# Or Using Yarn
yarn test
```

## Dependencies
None


## Related
- [bytelabel](https://ghub.io/bytelabel): convert byte lengths into a nice formatted string

## Contributors
Pull requests and stars are always welcome. For bugs and feature requests, please [create an issue](https://github.com/TiagoDanin/Number-Label/issues). [List of all contributors](https://github.com/TiagoDanin/Number-Label/graphs/contributors).


## License
[MIT](LICENSE) © [Tiago Danin](https://TiagoDanin.github.io)
