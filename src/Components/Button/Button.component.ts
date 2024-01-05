import { Component, Input } from '@angular/core';

@Component ({
	selector: 'button-component',
	templateUrl: './Button.component.html',
	styleUrls: ['./Button.component.scss']
})

export class Button_Component
{
	@Input () Text: string = '';

}