import { Component, Input, OnInit } from "@angular/core";
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component ({
	selector: "svg-element",
	template: "<svg [attr.class]='Classes' [attr.fill]='Color' [attr.height]='Height' [innerHTML]='Inner_SVG' [attr.width]='Width' [attr.viewBox]='View_Box' xmlns='http://www.w3.org/2000/svg'></svg>",
	styles: ["svg {width: inherit; height: inherit;}"]
})

export class SVG_Element_Component implements OnInit
{
    @Input () Classes: string = '';
	@Input () Color: string = '';
	@Input () Height: string = '';
	@Input () Inner_SVG: SafeHtml | string | null = '';
	@Input () SVG_Path: string = '';
	@Input () View_Box: string = '';
	@Input () Width: string = '';

	constructor (private Sanitizer: DomSanitizer) 
	{
		
	}

	ngOnInit (): void 
	{
		this.Inner_SVG = this.Sanitizer.bypassSecurityTrustHtml (this.Inner_SVG as string);
		console.log (this.Inner_SVG);
	}
}