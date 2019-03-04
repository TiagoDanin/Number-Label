const label = require('./index.js')
const assert = require('assert')

console.log('[+] 0% Executing tests!')
assert.equal(label.convert(0.000001), '1.00 Millionth')
assert.equal(label.convert(101, 'prefix', {start: 101}), '101')
assert.equal(label.convert(102, 'name', {start: 101}), '1.02 Hundred')
assert.equal(label.convert(1000500, 'symbol'), '1.00M')
console.log('[+] 50% Executing tests!')
assert.equal(
	label.convert(Math.pow(10, 3)+2, 'symbol', {
		toFixed: 10,
	})
	,'1.0020000000k'
)
console.log('[+] 100% Done!')
