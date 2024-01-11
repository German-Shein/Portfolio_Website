import { Component } from '@angular/core';

@Component ({
	selector: 'resume-component',
	templateUrl: './Resume.component.html',
	styleUrls: ['./Resume.component.scss']
})

export class Resume_Component
{
    Key_Skills_and_Contributions = 
	[
		[
			{
				Contribution: "Refactored 3 front- and back-end applications to improve performance and cut down development time by 3 sprints. Integrated 5+ third-party systems to achieve full functionality up of the MVP.",
				Skill: "Full Stack Web Development",
			},
			{
				Contribution: "Optimized the website experience for mobile phone users and created infinite scrolling to allows users to easily process a large amount of entries.",
				Skill: "UX & Product Design",
			},
			{
				Contribution: "Lead a team of engineers and designers to work in organized and efficient manner. By utilizing their existing talents, as well as their aspirations, the development process became more streamlined. The team was introduced to the sprint-based development, after which an average 10 tickets per sprint were closed. The project was completed in 3.5 months, with no features removed for the sake of the deadline.",
				Skill: "Team Leadership",
			}
		],
		[
			{
				Contribution: "Deployed smart UX components on clients' websites and developed the API SDK product for clients to manage Content, Data Algorithms and Personalized Value Ranking. Participated in 10+ code reviews with 1k+ lines of new and edited code.",
				Skill: "Full Stack Web Development",
			},
			{
				Contribution: "Created an API Product SDK to enable automated content management for the smart UX components of 20+ e-Commerce platforms in US, UK and Brazil.",
				Skill: "API Creation & Integration",
			},
			{
				Contribution: "Worked closely with the UX and Data Science teams. With the UX team, the purpose was to ensure the deployed smart components matched the Figma mockups. With the Data Science team, the goal was to properly extract data for the dashboard that displayed smart components metrics.",
				Skill: "MultidisciplinaryTeam Collaboration",
			}
		],
		[
			{
				Contribution: "Implemented the web pages of the front-end application, created the reusable component-based design system and added animations that enhanced the UX of the final product.",
				Skill: "User Experience (UX) Design",
			},
			{
				Contribution: "Coached 4 interns with backgrounds in AI, Machine Learning, Database Management, Back-end development and Front-end development, which enabled to cut back the MVP development by 1 sprint.",
				Skill: "Mentorship",
			}
		],
		[
			{
				Contribution: "Createed a microservice architecture consisting of 4 applications and defines business logic to reduce the development time by 3 months and lay the groundwork for the Containerization and CI/CD.",
				Skill: "Software Architecture",
			},
			{
				Contribution: "Developed the microservices for the application using the MERN stack. Additionally, designs the UX and uses the unified design system for the front-end to optimize the development time and save AED ~100k / year on workforce expenses.",
				Skill: "Full Stack Web Development",
			},
			{
				Contribution: "Mapped out the road for the product development for the year of 2023, with the consideration of the following: new features, migration to AWS and client onboarding.",
				Skill: "Strategic Thinking and Planning",
			}
		],
		[
			{
				Contribution: "Developed and contributed 10+ front-end and back-end microservices using the MERN and CERN stacks to enable e-learning of digital and technological skills for 250k+ users, with our primary clients being GEMS Education (2019-2020), ADNOC (2019) and Ministries of Education (2017-2018) of Egypt, Kenya, Nigeria, Mozambique and South Africa.",
				Skill: "Full Stack Web Development",
			},
			{
				Contribution: "Developed, integrated and tested ~50 API definitions for 10+ microservices that were used by 100k users daily. Examples include the IBM Watson Assistant integration, GitHub support ticketing, LiveEngage Live Chat, BFF microservices, as well as Cloudant and MongoDB querying.",
				Skill: "API Creation & Integration",
			},
			{
				Contribution: "Collaborated with a team of ~200 people, consisting of web developers, software architects, designers, business developers and product managers, spread across the North America, EU, MEA and South Asia, to deliver 3 large-scale educational platforms. Our collaboration consisted of frequent status calls, Trello project management and Slack collaboration.",
				Skill: "Multidisciplinary Team Collaboration",
			},
			{
				Contribution: "Published 10 courses on the topics of Cloud, Container Orchestration and Internet of Things that resulted in 1k+ IBM badges issued, conducted webinars for 10k+ users and created documentation for the development purposes.",
				Skill: "Business Communication",
			}
		]
	]
}