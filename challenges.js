module.exports = [
	{
		task: "Find a `TODO` or `FIXME` comment in your code and fix it!",
		rationale: "TODOs will inevitably sit there until someone ends up going back into that file, so go and find one and fix it.",
		tip: "`npx code-audit todo` in the root of your repo to find them",
	},
	{
		task: "Extract a compound conditional!",
		rationale: "```\nif(5 >= new Date().getDay() >= 1) {\n\tpostChallengeToSlack();\n}\n``` is harder to understand than breaking out the conditional into a variable or function call.\n```\nconst isWeekday = 5 >= new Date().getDay() >= 1;\nif(isWeekday) {\n\tpostChallengeToSlack();\n}\n```\nIdeally the actual code inside the brackets should be one value, if you can extract it out so that any `&&`s or `||`s aren't being used you've almost certainly made the next person's life easier when trying to read that code. Read https://refactoring.guru/decompose-conditional for some more info.",
		// tip: ""
	},
	{
		task: "Learn about a node module you've probably never used",
		rationale: "Learning things is fun and there are so many that you've never heard of that you might want to use in the future that you'd never had known about. Go and see what one does and tell someone else",
		tip: "`npx code-audit learn` in the root of your directory to open a random node module's npm page",
	}
]
