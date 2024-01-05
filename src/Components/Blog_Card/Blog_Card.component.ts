import { Component, Input, OnInit } from '@angular/core';
import { Format_Timestamp } from 'src/Helpers/Format_Timestamp';

@Component ({
	selector: 'blog-card-component',
	templateUrl: './Blog_Card.component.html',
	styleUrls: ['./Blog_Card.component.scss']
})

export class Blog_Card_Component implements OnInit
{
    Creation_Date: string = '';
    @Input () Thumbnail: string = '';
	@Input () Timestamp: Date = new Date ();
	@Input () Title: string = '';

	constructor ()
	{

	}

    ngOnInit (): void 
	{
		this.Creation_Date = Format_Timestamp (this.Timestamp);
	}
}