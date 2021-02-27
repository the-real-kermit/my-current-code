const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const config = require("../../botconfig/config.json");
const color = require("../../botconfig/colors.json");

module.exports = {	
	name: "slap",
	category: "fun", 
	cooldown: 0, 
	usage: "slap <@use>",
  	description: "Use this command to slap any mentioned user", 


  run: async (client, message, args, user, text, prefix) => {

     let victim = message.mentions.users.first()
     if (!victim) return message.channel.send({
       embed: {
         color: color.main,
         author: {
           name:"Please mention a valid user to slap!",
           icon_url: message.author.displayAvatarURL({ dynamic:true })
         }
         
       }      
     })
      
    else {
            let gifs = ["https://images-ext-1.discordapp.net/external/wwnMkOuo4TBt_QliCxgUNn_fGX2NrPl2lfPvJBvXNjA/https/cdn.weeb.sh/images/rkN2u_XP-.gif?width=400&height=196","https://images-ext-1.discordapp.net/external/gRSqKHozPS9foIY_I608kk_QfoycaW1-h5H-ey0U9dQ/https/cdn.weeb.sh/images/rJv2H5adf.gif?width=400&height=225","https://images-ext-1.discordapp.net/external/_smrUzvXMdtuCuqtb1B7ixh8EGcc_SX5ZPqTbP_uQV8/%3Fwidth%3D400%26height%3D223/https/images-ext-2.discordapp.net/external/_FI20LII9PG87rzbd9WDjmWMqkSN4QsECVdf6sYzunI/https/cdn.weeb.sh/images/S1DyFuQD-.gif?width=320&height=178"]//add as much as you want bro!!
          
            let slapped = new MessageEmbed()
            .setTitle(`${victim.username} was slapped by ${message.author.username}`)
            .setImage(`${gifs[Math.floor(Math.random() * gifs.length)]}`)
            .setColor(color.main)
            message.channel.send(slapped)
        }
  }
} 
