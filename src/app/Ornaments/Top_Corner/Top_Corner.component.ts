import { Component, Input, OnInit } from "@angular/core";

@Component ({
	selector: "top-corner-ornament",
	templateUrl: "./Top_Corner.component.svg",
	styles: [".Right_Corner {-webkit-transform: scaleX(-1); transform: scaleX(-1);}"]
})

export class Top_Corner_Ornament_Component implements OnInit
{
	@Input () Color: string = '';
    @Input () Corner: string = ''; 
	@Input () Height: string = '';
	@Input () Width: string = '';

	constructor () 
	{
		
	}

	ngOnInit (): void 
	{

	}
}