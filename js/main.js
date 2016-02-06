var iceCream = [ 'chocolate', 'cookiesandcream', 'sherbert' ];
iceCream.push( 'mint' );

var presidents = [
	{ firstName: 'Barrack', lastName: 'Obama', termLength: '2',
	party: 'Democrat', yearsOfPresidency: '8' },

	{ firstName: 'George', lastName: 'Bush', termLength: '2',
	party: 'Republican', yearsOfPresidency: '8' },

	{ firstName: 'Bill', lastName: 'Clinton', termLength: '2',
	party: 'Democrat', yearsOfPresidency: '8' },

	{ firstName: 'George H', lastName: 'Bush', termLength: '1',
	party: 'Republican', yearsOfPresidency: '4' },

	{ firstName: 'Ronald', lastName: 'Reagan', termLength: '2',
	party: 'Republican', yearsOfPresidency: '8' }
];

console.log( presidents[ 2 ].firstName, presidents[ 2 ].lastName );

function howdy() {
	return 'Andy DiBella says hello!';
}

console.log( howdy() );

var numba = function( string ) {
	if ( string.length < 7 ) {
		return 'What a short little word!';
	} else if ( string.length > 7 ) {
		return 'Im sorry, but thats too many to count';
	} else { ( string.length === 7 );
		return '7, what a perfect choice!';
	}
};

console.log( numba( '7' ) );

console.log( numba( 'seventy' ) );

console.log( numba( 'university' ) );

function inception( callback, value ) {
	callback( value );
}

function movie( name ) {
	console.log( name + 'is a fantastic movie.' );
}

inception( movie, 'The Godfather ' );
