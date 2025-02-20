import { fromEvent } from 'rxjs';
import { scan, filter } from 'rxjs/operators';

import { genJoke } from './generateJoke';
import './styles/main.scss';

const button = document.getElementById('myBtn');
const clicks$ = fromEvent(button, 'click');

clicks$.pipe(
	scan(count => count + 1, 0)
).subscribe(console.log);
