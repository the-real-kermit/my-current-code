const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const config = require("../../botconfig/config.json");
const color = require("../../botconfig/colors.json");

module.exports = {	
	name: "poll",
	category: "misc", 
	cooldown: 0, 
	usage: "poll 'OPTION 1' 'OPTION 2' ",
  	description: "Makes a Poll embed", 

	
  run: async (client, message, args, user, text, prefix) => {
    
    const polls = args.join(' ')
const regex = polls.match(/"[^"]+"|[\\S]+"[^"]+/g)

if(regex.length > 9) {
return message.channel.send('You Can Only have 9 Polls Options.')
}

let str = ''
 
let emojis = [
    '1️⃣',
    '2️⃣',
    '3️⃣',
    '4️⃣',
    '5️⃣',
    '6️⃣',
    '7️⃣',
    '8️⃣',
    '9️⃣'
]

let i = 0
for(const poll of regex) {
  str = str +`${emojis[i]} ${poll}\n\n`
  i++
}
//const PollTitle = args.join(" ");

  const poll = new MessageEmbed()
.setTitle("New Poll")
.setColor(color.main)
.setDescription(str.replace(/"/g, ''))
.setFooter(`Hosted by ${message.author.username}`)
.setTimestamp()
const msg = await message.channel.send(poll)

for (let i =0; i < regex.length; i++) {

  msg.react(emojis[i])
}

}

	}
