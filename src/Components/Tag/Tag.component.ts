import { Component, Input } from '@angular/core';

@Component ({
	selector: 'tag-component',
	templateUrl: './Tag.component.html',
	styleUrls: ['./Tag.component.scss']
})

export class Tag_Component
{
	@Input () Text: string = '';
}