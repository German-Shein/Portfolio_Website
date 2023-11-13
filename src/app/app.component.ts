import { Component } from '@angular/core';
import SVG_Icons from '../assets/SVG_Icons.json';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})

export class AppComponent 
{
	View: string = "About Me"

	Select_Active_View (View: string): void
	{
		this.View = View;
	}
}