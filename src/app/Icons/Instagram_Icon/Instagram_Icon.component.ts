import { Component, Input, OnInit } from "@angular/core";

@Component ({
	selector: "instagram-icon",
	templateUrl: "./Instagram_Icon.component.svg",
	styles: ["svg {width: inherit; height: inherit;}"]
})

export class Instagram_Icon_Component implements OnInit
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