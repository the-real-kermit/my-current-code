const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const config = require("../../botconfig/config.json");
const color = require("../../botconfig/colors.json");
const { mem, cpu, os } = require('node-os-utils');
const { stripIndent } = require('common-tags');
const moment = require("moment")

module.exports = {	
	name: "botinfo",
	category: "info", 
	cooldown: 5, 
	usage: "botinfo",
  	description: "Shows the bots info", 

	
  run: async (client, message, args, user, text, prefix) => {

const d = moment.duration(message.client.uptime);
    const days = (d.days() == 1) ? `${d.days()} day` : `${d.days()} days`;
    const hours = (d.hours() == 1) ? `${d.hours()} hour` : `${d.hours()} hours`;
    const clientStats = stripIndent`
      Servers   :: ${message.client.guilds.cache.size}
      Users     :: ${message.client.users.cache.size}
      Channels  :: ${message.client.channels.cache.size}
      WS Ping   :: ${Math.round(message.client.ws.ping)}ms
      Uptime    :: ${days} and ${hours}
    `;
    const { totalMemMb, usedMemMb } = await mem.info();
    const serverStats = stripIndent`
      OS        :: ${await os.oos()}
      CPU       :: ${cpu.model()}
      Cores     :: ${cpu.count()}
      CPU Usage :: ${await cpu.usage()} %
      RAM       :: ${totalMemMb} MB
      RAM Usage :: ${usedMemMb} MB 
    `;
    
    const embed = new MessageEmbed()
      .setTitle('Bot\'s Statistics')
      .addField('Commands:', `\`${message.client.commands.size}\` commands`, true)
      .addField('Aliases:', `\`${message.client.aliases.size}\` aliases`, true)
      .addField('Client:', `\`\`\`asciidoc\n${clientStats}\`\`\``)
      .addField('Server:', `\`\`\`asciidoc\n${serverStats}\`\`\``)
      .addField(
        'Links:', 
        '**[Invite Me](https://discord.com/api/oauth2/authorize?client_id=798675226535133205&permissions=8&scope=bot)**'
      )
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor(color.main);
    message.channel.send(embed);
    }
}