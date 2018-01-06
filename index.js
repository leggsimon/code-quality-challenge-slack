const Slack = require('node-slack')
const slack = new Slack(process.env.CQC_SLACK_URL)
const challenges = require('./challenges')

const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
const day = days[(new Date().getDay() - 1)]

const bold = text => `*${text}*`
const italic = text => `_${text}_`
const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max))

const { task, rationale, tip } = challenges[getRandomInt(challenges.length)]

const text =
`Here is your 20 minute challenge:\t${bold(task)}
${rationale || ''}
${tip ? italic(`TIP: ${tip}`) : ''}
Post the PR for your challenge as a threaded reply to this message.`

slack.send({
	icon_emoji: `:${day}:`,
	username: 'Today\'s Challenge!',
	text
})
