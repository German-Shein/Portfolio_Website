import { Component } from '@angular/core';
import { Format_Timestamp } from 'src/Helpers/Format_Timestamp';

@Component ({
	selector: 'blog-component',
	templateUrl: './Blog.component.html',
	styleUrls: ['./Blog.component.scss']
})

export class Blogs_Component
{
	Blog_Date: string = Format_Timestamp (new Date ("2024-01-08T10:03:28.728Z"));
}