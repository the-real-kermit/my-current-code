const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const config = require("../../botconfig/config.json");
const color = require("../../botconfig/colors.json");
const { parse } = require("twemoji-parser"); 
let Discord = require("discord.js")

module.exports = {	
	name: "emojicreate",
	category: "misc", 
	cooldown: 3, 
	usage: "emojicreate",
  	description: "Steal other emojis", 
  permissions: "MANAGE_EMOJIS",

	
  run: async (client, message, args, user, text, prefix) => {
         if (message.member.hasPermission("MANAGE_EMOJIS")) {
const emoji = args[0];
        if (!emoji) return message.channel.send(`Please Give Me A Emoji!`);

        let customemoji = Discord.Util.parseEmoji(emoji);
        if (customemoji.id) {
            const Link = `https://cdn.discordapp.com/emojis/${customemoji.id}.${
customemoji.animated ? "gif" : "png"
}`;
            const name = args.slice(1).join(" ");
            try {
 const Added = new Discord.MessageEmbed()
.setColor(color.main)  
.setAuthor(`${message.author.username} emoji added!`, message.author.displayAvatarURL({ dynamic: true }))
.addField("Emoji Name", `${name || `${customemoji.name}`}`, true)
.addField("Preview", `[Click Me](${Link} "Link for the preview!")`, true)
 await message.guild.emojis.create(
                    `${Link}`,
                    `${name || `${customemoji.name}`}`
)
                return message.channel.send(Added)
            } catch(err) {
                return message.channel.send(`An error has occured!\n\n**Possible Reasons:**\n\`\`\`- This server has reached the emojis limit\n- The bot doesn't have permissions.\n- The emojis size is too big.\n- The bot is having some problems.\`\`\``)
            }
} else {
let CheckEmoji = parse(emoji, { assetType: "png" });
if (!CheckEmoji[0])
return message.channel.send(`**Please Give Me A Valid Emoji!**`);
message.channel.send(
`**You Can Use Normal Emoji Without Adding In Server!**`
);
}
} else {
  message.channel.send("You have no perms!")
}




	}
}