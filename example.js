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
