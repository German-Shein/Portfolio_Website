import { Component, Input, OnInit } from "@angular/core";

@Component ({
	selector: "divider-ornament",
	templateUrl: "./Divider.component.svg",
	styles: []
})

export class Crown_Ornament_Component implements OnInit
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