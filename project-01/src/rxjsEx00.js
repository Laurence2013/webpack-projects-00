const { fromEvent, interval } = require('rxjs');
const { map, combineLatest }  = require('rxjs/operators');

function rxjsFunc00(){
	const searchTerm = document.getElementById('search-box');
	const inputValues = fromEvent(searchTerm, 'input').pipe(
		map(event => event.target.value)
	);
	return inputValues.subscribe(val => console.log(val));
}

export default rxjsFunc00;
