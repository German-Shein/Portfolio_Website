import { Component, Input, OnInit } from "@angular/core";

@Component ({
	selector: "hamburger-menu-icon",
	templateUrl: "./Hamburger_Menu_Icon.component.svg",
	styles: ["svg {width: inherit; height: inherit;}"]
})

export class Hamburger_Menu_Icon_Component implements OnInit
{
	@Input () Color: string = '';
	@Input () Height: string = '';
	@Input () Width: string = '';


	constructor () 
	{
		
	}

	ngOnInit (): void 
	{

	}
}