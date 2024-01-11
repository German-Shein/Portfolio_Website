import { Component, EventEmitter, Output } from '@angular/core';
import SVG_Icons from '../../assets/SVG_Icons.json';

@Component ({
	selector: 'header-component',
	templateUrl: './Header.component.html',
	styleUrls: ['./Header.component.scss']
})

export class Header_Component
{
	Classes = ['hidden'];
    @Output () Select_Active_View_Event = new EventEmitter <string> ();
	Hamburger_Menu_Icon: string = SVG_Icons.Hamburger_Menu_Icon;

	Select_Active_View (View: string): void
	{
		this.Select_Active_View_Event.emit (View);
	}

	Toggle_Hamburger_Menu (): void
	{
		if (this.Classes.includes ('hidden'))
		{
			this.Classes = this.Classes.filter (Class => Class !== 'hidden');
			this.Classes.push ('flex');
		}
		else
		{
			this.Classes = this.Classes.filter (Class => Class !== 'flex');
			this.Classes.push ('hidden');
		}
	}
}