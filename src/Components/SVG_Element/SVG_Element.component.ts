import { Component, Input, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

@Component ({
	selector: "svg-element",
	template: "<svg [attr.class]='Classes' [attr.fill]='Color' [attr.height]='Height' [innerHtml]='Inner_SVG' [attr.width]='Width' [attr.viewBox]='View_Box' xmlns='http://www.w3.org/2000/svg'></svg>",
	styles: ["svg {width: inherit; height: inherit;}"]
})

export class SVG_Element_Component implements OnInit
{
    @Input () Classes: string = '';
	@Input () Color: string = '';
	@Input () Height: string = '';
	Inner_SVG: SafeHtml = '';
	@Input () SVG_Path: string = '';
	@Input () View_Box: string = '';
	@Input () Width: string = '';

	constructor (private HTTP_Client: HttpClient) 
	{
		
	}

	ngOnInit (): void 
	{
		this.HTTP_Client.get (this.SVG_Path, { responseType: "text" }).pipe ().subscribe (Data => this.Inner_SVG = Data);
	}
}