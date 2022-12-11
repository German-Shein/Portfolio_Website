import { Component, EventEmitter, Output } from '@angular/core';

@Component ({
	selector: 'header-component',
	templateUrl: './Header.component.html',
	styleUrls: ['./Header.component.scss']
})

export class Header_Component
{
    @Output () Select_Active_View_Event = new EventEmitter <string> ();

	Select_Active_View (View: string): void
	{
		this.Select_Active_View_Event.emit (View);
	}
}