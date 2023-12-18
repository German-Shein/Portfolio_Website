import { Component, Input } from '@angular/core';
import SVG_Icons from '../../assets/SVG_Icons.json';

@Component ({
	selector: 'link-component',
	templateUrl: './Link.component.html',
	styleUrls: ['./Link.component.scss']
})

export class Link_Component
{
	Link_Icon: string = SVG_Icons.Link_Icon;
	@Input () Text: string = '';
	@Input () URI: string = '';
}