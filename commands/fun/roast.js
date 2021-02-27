const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const config = require("../../botconfig/config.json");
const color = require("../../botconfig/colors.json");

module.exports = {	
	name: "roast",
	category: "fun", 
	cooldown: 5, 
	usage: "roast (@user)",
  	description: "Use this command to roast any mentioned user", 


  run: async (client, message, args, user, text, prefix) => {

     let victim = message.mentions.users.first()
     if (!victim) return message.channel.send({
       embed: {
         color: color.main,
         author: {
           name:"Please mention a valid user to roast!",
           icon_url: message.author.displayAvatarURL({ dynamic:true })
         }
         
       }      
     })
      
    else {
            let roasts = ["You're as useless as the 'ueue' in 'queue'.", 
                          "Mirrors can't talk. Lucky for you, they can't laugh either.",
                          "Hey, you've got something on your chin... no, the third one down.",
                          "You're the reason the gene pool needs a life gaurd.",
                          "If I had a face like yours, I'd sue your parents.",
                          "Your only chance of getting laid is to crawl up a chicken's butt and wait.",
                          "Some day you'll go far... and I hope you stay there.",
                          "You must've been born on a highway since that's where the most accidents happen.",
                          "Your birth certificate is just an apology letter from the condom factory.",
                          "If laughter is the best medicine, your face must be curing the world.",
                          "I'm glad to see that you're not letting your education get in the way of your ignorance.",
                          "Is your ass jealous of the amount of shit that comes out of your mouth on a daily basis?",
                          "So, a thought crossed your mind, must've been a long and lonely journey.",
                          "If I wanted to kill myself, I'd climb up your ego and jump down to your IQ",
                          "If I wanted to be wrong all the time, I'd just agree with you.",
                          "When I see your face, there's not a thing I'd change... except for the direction I was looking.",
                          "If I had a dollar for everytime you said something smart, my bank account would be as low as your IQ.",
                          "When you were born, the docter threw you out the window and the window threw you back.",
                          "I love what you did with your hair, how did you get it to come out of your nostrils like that?",
                          "Like is full of disappointments and I just added you to the list."
                         ]//add as much as you want bro!!
          
            let roasted = new MessageEmbed()
            .setTitle(`${victim.username}: ${victim.user.displayAvatarURL({ dynamic:true })}`)
            .setDescription(`**${roasts[Math.floor(Math.random() * roasts.length)]}**`)
            .setColor(color.main)
            .setFooter(`Command requested by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
            message.channel.send(roasted)
        }
  }
} 
