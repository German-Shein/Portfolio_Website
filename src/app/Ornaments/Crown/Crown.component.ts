import { Component, Input, OnInit } from "@angular/core";

@Component ({
	selector: "crown-ornament",
	templateUrl: "./Crown.component.svg",
	styles: ["svg {width: inherit; height: inherit;}"]
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