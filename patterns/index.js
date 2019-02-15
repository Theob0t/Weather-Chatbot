//CHATBOT Patterns


const patternDict = [{
	pattern: '\\b(?<greeting>Hi|Hello|Hey)\\b',
	intent: 'Hello'
},{
	pattern: '\\b(?<greeting>bye|exit)\\b',
	intent: 'Exit'
},{
	pattern: "\\b(?<city>.+)\\b",
    intent: "CurrentWeather"
}];

module.exports = patternDict;



//QUESTION WRITE SOME PATTERNS + INTENT AND ADD THEM TO YOUR PATTERN DICTIONARY

