import { fromEvent } from 'rxjs';
import { scan, filter } from 'rxjs/operators';

import $ from 'jquery';
import './styles/main.scss';

const button = document.getElementById('myButton');
const clicks$ = fromEvent(button, 'click');

clicks$.pipe(scan(dat00 => dat00 + 1, 0)).subscribe(dat01 => $('#message').html(dat01));

