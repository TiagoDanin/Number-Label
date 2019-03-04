const label = require('./index.js')
const assert = require('assert')

console.log('[+] 0% Executing tests!')
assert.equal(label.convert(0.000001), '1.00 Millionth')
assert.equal(label.convert(99, 'prefix', {start: 99, toFixed: 4}), '99.0000')
assert.equal(label.convert(100, 'prefix', {start: 99, toFixed: 4}), '1.0000 Hecto')
console.log('[+] 50% Executing tests!')
assert.equal(label.convert(102, 'name', {start: 99}), '1.02 Hundred')
assert.equal(label.convert(1000500, 'symbol'), '1.00M')
assert.equal(label.convert(157, 'name', {start: 800}), '157.00')
assert.equal(
	label.convert(Math.pow(10, 3)+2, 'symbol', {
		toFixed: 10,
	})
	,'1.0020000000k'
)
console.log('[+] 100% Done!')
