const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const config = require("../../botconfig/config.json");
const color = require("../../botconfig/colors.json");

module.exports = {	
	name: "hangman",
	category: "fun", 
	cooldown: 5, 
	usage: "hangman",
  	description: "Play hangman against the bot!", 

	
  run: async (client, message, args, user, text, prefix) => {

const fetch = require("node-fetch");

//unicode fun...
const letterEmojisMap = {
    "🅰️": "A", "🇦": "A", "🅱️": "B", "🇧": "B", "🇨": "C", "🇩": "D", "🇪": "E",
    "🇫": "F", "🇬": "G", "🇭": "H", "ℹ️": "I", "🇮": "I", "🇯": "J", "🇰": "K", "🇱": "L",
    "Ⓜ️": "M", "🇲": "M", "🇳": "N", "🅾️": "O", "⭕": "O", "🇴": "O", "🅿️": "P",
    "🇵": "P", "🇶": "Q", "🇷": "R", "🇸": "S", "🇹": "T", "🇺": "U", "🇻": "V", "🇼": "W",
    "✖️": "X", "❎": "X", "❌": "X", "🇽": "X", "🇾": "Y", "💤": "Z", "🇿": "Z"
}

module.exports = class HangmanGame {
    constructor() {
        this.gameEmbed = null;
        this.inGame = false;
        this.word = "";
        this.guesssed = [];
        this.wrongs = 0;
    }

    newGame(msg, onGameEnd) {
        if (this.inGame)
            return;

        this.gameStarter = msg.author.id;
        this.gameStarterName = msg.author.username;
        this.onGameEnd = onGameEnd;

        fetch('https://api.theturkey.dev/randomword').then(resp => resp.text()).then(word => {
            this.inGame = true;
            this.word = word.toUpperCase();
            this.guesssed = [];
            this.wrongs = 0;

            msg.channel.send(this.getEmbed()).then(emsg => {
                this.gameEmbed = emsg;
                this.waitForReaction();
            });
        });
    }

    getEmbed() {
        return new MessageEmbed()
            .setColor(color.main)
            .setTitle('Hangman')
            .setAuthor("Made By: TurkeyDev", "https://site.theturkey.dev/images/turkey_avatar.png", "https://twitter.com/turkeydev")
            .setDescription(this.getDescription())
            .addField('Letters Guessed', this.guesssed.length == 0 ? '\u200b' : this.guesssed.join(" "))
            .addField('How To Play', "React to this message using the emojis that look like letters (🅰️, 🇹, )")
            .setFooter(`Currently Playing: ${this.gameStarterName}`)
            .setTimestamp();
    }

    makeGuess(reaction) {
        if (Object.keys(letterEmojisMap).includes(reaction)) {
            const letter = letterEmojisMap[reaction];
            if (!this.guesssed.includes(letter)) {
                this.guesssed.push(letter);

                if (this.word.indexOf(letter) == -1) {
                    this.wrongs++;

                    if (this.wrongs == 6) {
                        this.gameOver({ result: 'winner', win: false });
                    }
                }
                else if (!this.word.split("").map(l => this.guesssed.includes(l) ? l : "_").includes("_")) {
                    this.gameOver({ result: 'winner', win: true });
                }
            }
        }

        if (this.inGame) {
            this.gameEmbed.edit(this.getEmbed());
            this.waitForReaction();
        }
    }

    gameOver(result) {
        if (result.result !== 'force_end')
            this.onGameEnd();

        this.inGame = false;
        const editEmbed = new MessageEmbed()
            .setColor(color.main)
            .setTitle('Hangman')
            .setAuthor("Made By: TurkeyDev", "https://site.theturkey.dev/images/turkey_avatar.png", "https://twitter.com/turkeydev")
            .setDescription((result.result === 'winner' ? (result.win ? "Chat Wins!" : "Chat loses") : 'The game was ended!') + "\n\nThe Word was:\n" + this.word)
            .setTimestamp();
        this.gameEmbed.edit(editEmbed);

        this.gameEmbed.reactions.removeAll();
    }

    getDescription() {
        return "```"
            + "|‾‾‾‾‾‾|   \n|     "
            + (this.wrongs > 0 ? "🎩" : " ")
            + "   \n|     "
            + (this.wrongs > 1 ? "😟" : " ")
            + "   \n|     "
            + (this.wrongs > 2 ? "👕" : " ")
            + "   \n|     "
            + (this.wrongs > 3 ? "🩳" : " ")
            + "   \n|    "
            + (this.wrongs > 4 ? "👞👞" : " ")
            + "   \n|     \n|__________\n\n"
            + this.word.split("").map(l => this.guesssed.includes(l) ? l : "_").join(" ")
            + "```";
    }

    waitForReaction() {
        this.gameEmbed.awaitReactions(() => true, { max: 1, time: 300000, errors: ['time'] })
            .then(collected => {
                const reaction = collected.first();
                if (reaction.users.cache.has(this.gameStarter))
                    this.makeGuess(reaction.emoji.name);
                else
                    this.waitForReaction();
                reaction.remove();
            })
            .catch(collected => {
                this.gameOver({ result: 'ended' });
            });
    }
}

	}
}