import { of, from, interval } from 'rxjs';
import { tap, map, filter, take, delay } from 'rxjs/operators';

const source00$ = interval(1000).pipe(take(10));
const result00$ = source00$.pipe(
	tap(_ => console.log('New Window')),
	map(dat00 => dat00 * 2)
);
result00$.subscribe(val00 => console.log('Value: ', val00));
