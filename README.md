# code-quality-challenge-slack

Completely inspired by the Code Quality Challenge ([@CodeQualChal](https://twitter.com/CodeQualChal)) by Ben Orenstein ([@r00k](https://twitter.com/r00k)). This posts a random 20 minute code challenge to a Slack channel of your choice.

## Usage
You'll need a webhook url to post to your Slack team (you should be able to do that [here](https://my.slack.com/services/new/incoming-webhook/)). Replacing `<WEBHOOK-URL>` below with your one, run that code to send a message.
```sh
export CQC_SLACK_URL=<WEBHOOK-URL>; node index.js
```

_Note: Our slack has emojis that represent the days of the week which are used as the bot image. Without them the bot image will be blank. Feel free to change the emoji or add an emoji set!_


## Contributing
```sh
git clone https://github.com/leggsimon/code-quality-challenge-slack.git
cd code-quality-challenge-slack
npm install
```
If anyone wants to add any functionality or a challenge please open a PR.
