const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const ms = require("ms")
const config = require("../../botconfig/config.json");
const color = require("../../botconfig/colors.json");

module.exports = {	
	name: "giveaway",
	category: "misc", 
	cooldown: 5, 
	usage: "poll <prize> <# of winners> <time>",
  	description: "Makes a Poll embed", 

	
  run: async (client, message, args, user, text, prefix) => {
    
  
     client.on('message', async message => {
              let args = message.content.substring(prefix.length).split(" ")
              if(message.member.permissions.has('ADMINISTRATOR')){
              if (message.content.startsWith(`${prefix}giveaway`)) {
                  let time = args[1]
                  if (!time) return message.channel.send('You did not specify a time!');
          
                  if (
                      !args[1].endsWith("d") &&
                      !args[1].endsWith("h") &&
                      !args[1].endsWith("m") &&
                      !args[1].endsWith("s") 
                  )
                      return message.channel.send({
                        embed: {
                          color: color.main,
                          author: {
                            name: "Please list a valid time frame!",
                            icon_url: message.author.displayAvatarURL({ dynamoc:true })
                          }
                        }
                      })
          
                      let gchannel = message.mentions.channels.first();
                      if (!gchannel) return message.channel.send({
                        embed: {
                          color: color.main,
                          author: {
                            name: "I can't find that channel in this server!",
                            icon_url: message.author.displayAvatarURL({ dynamic:true })
                          }
                        }
                      })
                      let prize = args.slice(3).join(" ")
                      if (!prize) return message.channel.send({
                        embed: {
                          color: color.main,
                          author: {
                            name: "Please supply a valid prize for this giveaway!",
                            icon_url: message.author.displayAvatarURL({ dynamic:true })
                          }
                        }
                      })
          
                      message.delete()
                      gchannel.send(":tada: **NEW GIVEAWAY** :tada:")
                      let gembed = new MessageEmbed()
                          .setTitle(`${prize}`)
                          .setDescription(`React with :tada: to enter the giveaway!\nHosted By: **${message.author}**\nTime: **${time}**\nPrize: **${prize}**`)
                          .setTimestamp(Date.now + ms(args[1]))
                          .setColor(color.main)
                      let n = await gchannel.send(gembed)
                      n.react("🎉")
                      setTimeout(() => {
                          if(n.reactions.cache.get("🎉").count <= 1) {
                              return message.channel.send({
                                embed: {
                                  color: color.main,
                                  author: {
                                    name: "Not enough people entered for me to draw a winner!",
                                    icon_url: message.author.displayAvatarURL({ dynamic:true })
                                  }
                                }
                              })
                          }
          
                          let winner = n.reactions.cache.get("🎉").users.cache.filter((u) => !u.bot).random();
                          gchannel.send(`Congratulations ${winner}! You just won the **${prize}**!`
                          );
                      }, ms(args[1]));
              }
            }
          })
  }
}
