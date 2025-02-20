const { fromEvent } = require('rxjs');
const { scan, filter } = require('rxjs/operators');

const button = document.getElementById('myButton');
const clicks$ = fromEvent(button, 'click');

clicks$.pipe(
	scan(count => count + 1, 0)
).subscribe(console.log);
