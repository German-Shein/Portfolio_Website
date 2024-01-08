import { Component } from '@angular/core';
import { Format_Timestamp } from 'src/Helpers/Format_Timestamp';

@Component ({
	selector: 'blogs-component',
	templateUrl: './Blogs.component.html',
	styleUrls: ['./Blogs.component.scss']
})

export class Blogs_Component
{
	Latest_Blog_Date: string = Format_Timestamp (new Date ("2024-01-08T10:03:28.728Z"));
	Dates: Date [] = [new Date ("2024-01-08T10:03:28.728Z")]
}