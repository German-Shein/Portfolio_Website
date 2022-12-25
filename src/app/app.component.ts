import { Component } from '@angular/core';

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