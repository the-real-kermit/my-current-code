const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const config = require("../../botconfig/config.json");
const color = require("../../botconfig/colors.json");
const sourcebin = require('sourcebin_js');

module.exports = {	
	name: "discrim",
	category: "misc", 
	cooldown: 5, 
	usage: "discrim <#'s>'",
  	description: "Looks someone up by there #", 

	
  run: async (client, message, args, user, text, prefix) => {

    let men = message.mentions.users.first();
    
    let discrims;
    let dis;
    let content;
    
    if (men) {
      discrims = client.users.cache.filter(user => user.discriminator === men.discriminator).map(user => user.tag);

      dis = client.users.cache.filter(user => user.discriminator === men.discriminator).map(user => user.discriminator);
    }
    
    if (!men) {
      if (args[0]) {
        discrims = client.users.cache.filter(user => user.discriminator === args[0].replace('#', "")).map(user => user.tag);

        dis = client.users.cache.filter(user => user.discriminator === args[0].replace('#', "")).map(user => user.discriminator);
      }
    }
    
    if (!args[0]) {
      discrims = client.users.cache.filter(user => user.discriminator === message.author.discriminator).map(user => user.tag);

      dis = client.users.cache.filter(user => user.discriminator === message.author.discriminator).map(user => user.discriminator);
    }

    if (!discrims.length) return message.reply("I cant find that user!");

    if (discrims[0]) {
      content = `\`#1\` - **${discrims[0]}**`
    }

    if (discrims[1]) {
      content += `\n#2 - ${discrims[1]}`
    }

    if (discrims[2]) {
      content += `\n#3 - ${discrims[2]}`
    }

    if (discrims[3]) {
      content = `\n#4 - ${discrims[3]}`
    }

    if (discrims[4]) {
      content = `\n#5 - ${discrims[4]}`
    }

    if (discrims[5]) {
      content = `\n#6 - ${discrims[5]}`
    }

    if (discrims[6]) {
      content = `\n#7 - ${discrims[6]}`
    }

    if (discrims[7]) {
      content = `\n#8 - ${discrims[7]}`
    }

    if (discrims[8]) {
      content = `\n#9 - ${discrims[8]}`
    }

    if (discrims[9]) {
      content = `\n#10 - ${discrims[9]}`
    }
    
    sourcebin.create([{
      name: `Discriminators‏`,
      content: discrims.join('\n'),
      languageId: 'text'
    }])
      .then(src => {

      let embed = new MessageEmbed()
      .setTitle(`Users with ${dis[0]}`)
      .setDescription(`${content}\n\n**[Full Username](${src.url})**`)
      .setFooter(`Found ${discrims.length} users`, client.user.displayAvatarURL())
      .setColor(color.main)
      
      message.channel.send(embed);
    })
  .catch(e => {
         message.channel.send(`Error, try again later`)
   });
      
  }
}