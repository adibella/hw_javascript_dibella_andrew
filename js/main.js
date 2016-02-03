var iceCream = [ 'chocolate', 'cookiesandcream', 'sherbert' ];
iceCream.push( 'mint' );

var presidents = [
	{ firstName: 'Barrack', lastName: 'Obama', termLength: '2', party: 'Democrat', yearsOfPresidency: '8' },
	{ firstName: 'George', lastName: 'Bush', termLength: '2', party: 'Republican', yearsOfPresidency: '8' },
	{ firstName: 'Bill', lastName: 'Clinton', termLength: '2', party: 'Democrat', yearsOfPresidency: '8' },
	{ firstName: 'George H', lastName: 'Bush', termLength: '1', party: 'Republican', yearsOfPresidency: '4' },
	{ firstName: 'Ronald', lastName: 'Reagan', termLength: '2', party: 'Republican', yearsOfPresidency: '8' }
];

console.log( presidents.firstName[ 2 ].lastName[ 2 ] );

function howdy() {
	return 'Andy DiBella says hello!';
}

console.log( howdy() );
