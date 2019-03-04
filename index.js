const amounts = [
	{ pow: 24,  name: 'Septillion',    symbol: 'Y', prefix: 'Yotta'  },
	{ pow: 21,  name: 'Sextillion',    symbol: 'Z', prefix: 'Zetta'  },
	{ pow: 18,  name: 'Quintillion',   symbol: 'E', prefix: 'Exa'    },
	{ pow: 15,  name: 'Quadrillion',   symbol: 'P', prefix: 'Peta'   },
	{ pow: 12,  name: 'Trillion',      symbol: 'T', prefix: 'Tera'   },
	{ pow: 9,   name: 'Billion',       symbol: 'G', prefix: 'Giga'   },
	{ pow: 6,   name: 'Million',       symbol: 'M', prefix: 'Mega'   },
	{ pow: 3,   name: 'Thousand',      symbol: 'k', prefix: 'Kilo'   },
	{ pow: 2,   name: 'Hundred',       symbol: 'h', prefix: 'Hecto'  },
	{ pow: 0,   name: 'One',           symbol: '',  prefix: 'One'    },
	{ pow: -1,  name: 'Tenth',         symbol: 'd', prefix: 'Deci'   },
	{ pow: -2,  name: 'Hundredth',     symbol: 'c', prefix: 'Centi'  },
	{ pow: -3,  name: 'Thousandth',    symbol: 'm', prefix: 'Milli'  },
	{ pow: -6,  name: 'Millionth',     symbol: 'μ', prefix: 'Micro'  },
	{ pow: -9,  name: 'Billionth',     symbol: 'n', prefix: 'Nano'   },
	{ pow: -12, name: 'Trillionth',    symbol: 'p', prefix: 'Pico'   },
	{ pow: -15, name: 'Quadrillionth', symbol: 'f', prefix: 'Femto'  },
	{ pow: -18, name: 'Quintillionth', symbol: 'a', prefix: 'Atto'   },
	{ pow: -21, name: 'Sextillionth',  symbol: 'z', prefix: 'Zepto'  },
	{ pow: -24, name: 'Septillionth',  symbol: 'y', prefix: 'Yocto'  }
]

const getLabel = (number = 0, options={}) => {
	options = {
		toFixed: 2,
		type: 'name',
		start: false, //Or 0
		...options
	}

	number = Math.abs(Number(number))
	if (number == 0) {
		let amount = amounts.find((e) => {
			return e.pow == 0
		})
		number = number.toFixed(options.toFixed)
		return {
			number: number,
			...amount,
			options: options
		}
	}

	let amount = amounts.find((e) => {
		return number >= Math.pow(10, e.pow)
	})

	if (!amount) {
		amount = amounts[amounts.length-1]
	}

	number /= Math.pow(10, amount.pow)
	number = number.toFixed(options.toFixed)
	return {
		number: number,
		...amount,
		options: options
	}
}

const convert = (number = 0, type='name', options={}) => {
	options = {
		type: type,
		...options
	}
	let amount = getLabel(number, options)
	if (amount.pow == 0 || (amount.options.start && number <= amount.options.start)) {
		return `${amount.number}`
	}
	return `${amount.number}${options.type == 'symbol' ? '' : ' '}${amount[options.type]}`
}

module.exports = {
	convert,
	getLabel,
	amounts
}
