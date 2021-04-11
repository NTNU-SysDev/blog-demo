export const blogPosts = [
	{
		id: 1,
		tagline: "React Context",
		title: "Better alternative?",
		date: "11. April",
		featured: true,
		shortText: "I dette innlegget står det litt om hvorfor react context kan være et godt alternativ",
		fullText: (
			<p>
				Context provides a way to pass data through the component tree without having to pass props down manually at every level.{" "}
				<br />
				<br /> In a typical React application, data is passed top-down (parent to child) via props, but such usage can be
				cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an
				application. Context provides a way to share values like these between components without having to explicitly pass a prop
				through every level of the tree.
			</p>
		),
		thumbnail: "https://source.unsplash.com/random/250x220",
	},
	{
		id: 2,
		tagline: "React Bootstrap",
		title: "Bootstrap powaa",
		date: "11. April",
		featured: true,
		shortText: "Her er det en kjapp liten intro til hvorfor bruke react bootstrap? :O eller annet komponent bibliotek",
		fullText: (
			<p>
				React-Bootstrap replaces the Bootstrap JavaScript. Each component has been built from scratch as a true React component,
				without unneeded dependencies like jQuery.
				<br />
				<br />
				As one of the oldest React libraries, React-Bootstrap has evolved and grown alongside React, making it an excellent choice
				as your UI foundation.
				<br />
				<br />
				Built with compatibility in mind, we embrace our bootstrap core and strive to be compatible with the world's largest UI
				ecosystem.
			</p>
		),
		thumbnail: "https://source.unsplash.com/random/200x220",
	},
	{
		id: 3,
		tagline: "Javascript",
		title: "Javascript frameworks",
		date: "11. April",
		featured: false,
		shortText: "How many javascript frameworks are there?",
		fullText: (
			<p>
				JavaScript frameworks are an essential part of modern front-end web development, providing developers with tried and
				tested tools for building scalable, interactive web applications. Many modern companies use frameworks as a standard part
				of their tooling, so many front-end development jobs now require framework experience. In this set of articles, we are
				aiming to give you a comfortable starting point to help you begin learning frameworks.
				<br />
				<br />
				As an aspiring front-end developer, it can be hard to work out where to begin when learning frameworks — there are so many
				different frameworks to choose from, new ones appear all the time, they mostly work in a similar way but do some things
				differently, and there are some specific things to be careful about when using frameworks.
			</p>
		),
		thumbnail: "https://source.unsplash.com/random/180x200",
	},
	{
		id: 4,
		tagline: "React redux",
		title: "What is redux?",
		date: "11. April",
		featured: false,
		shortText: "Redux is a predictable state container for JavaScript apps.",
		fullText: (
			<p>
				It helps you write applications that behave consistently, run in different environments (client, server, and native), and
				are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time
				traveling debugger.
				<br />
				<br />
				You can use Redux together with React, or with any other view library. It is tiny (2kB, including dependencies), but has a
				large ecosystem of addons available.
			</p>
		),
		thumbnail: "https://source.unsplash.com/random/160x200",
	},
	{
		id: 5,
		tagline: "React router",
		title: "What is react router",
		date: "11. April",
		featured: false,
		shortText: "React Router is a collection of navigational components",
		fullText: (
			<p>
				Components are the heart of React's powerful, declarative programming model. React Router is a collection of navigational
				components that compose declaratively with your application. Whether you want to have bookmarkable URLs for your web app
				or a composable way to navigate in React Native, React Router works wherever React is rendering--so take your pick!
			</p>
		),
		thumbnail: "https://source.unsplash.com/random/170x200",
	},
	{
		id: 6,
		tagline: "Spring boot",
		title: "APIs with Spring boot",
		date: "11. April",
		featured: false,
		shortText:
			"Spring Boot makes it easy to create stand-alone, production-grade Spring based Applications that you can 'just run'.",
		fullText: (
			<p>
				Spring Boot makes it easy to create stand-alone, production-grade Spring based Applications that you can "just run".
				<br />
				<br />
				We take an opinionated view of the Spring platform and third-party libraries so you can get started with minimum fuss.
				Most Spring Boot applications need minimal Spring configuration.
			</p>
		),
		thumbnail: "https://source.unsplash.com/random/220x200",
	},
];
