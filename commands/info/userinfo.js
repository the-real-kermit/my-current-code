const flags = {
	DISCORD_EMPLOYEE: 'Discord Employee',
	DISCORD_PARTNER: 'Discord Partner',
	BUGHUNTER_LEVEL_1: 'Bug Hunter (Level 1)',
	BUGHUNTER_LEVEL_2: 'Bug Hunter (Level 2)',
	HYPESQUAD_EVENTS: 'HypeSquad Events',
	HOUSE_BRAVERY: 'House of Bravery',
	HOUSE_BRILLIANCE: 'House of Brilliance',
	HOUSE_BALANCE: 'House of Balance',
	EARLY_SUPPORTER: 'Early Supporter',
	TEAM_USER: 'Team User',
	SYSTEM: 'System',
	VERIFIED_BOT: 'Verified Bot',
	VERIFIED_DEVELOPER: 'Verified Bot Developer'
};

const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const config = require("../../botconfig/config.json");
const color = require("../../botconfig/colors.json");
const moment = require('moment');

module.exports = {	
	name: "userinfo",
	category: "info", 
	cooldown: 5, 
	usage: "userinfo <user>",
  	description: "Shows the users info", 

	
  run: async (client, message, args, user, text, prefix) => {


let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        let status;
        switch (user.presence.status) {
            case "online":
                status = "online";
                break;
            case "dnd":
                status = "dnd";
                break;
            case "idle":
                status = "idle";
                break;
            case "offline":
                status = "offline";
                break;
        }

        const embed = new MessageEmbed()
            .setTitle(`${member.user.username} stats`)
            .setColor(color.main)
            .setThumbnail(member.user.displayAvatarURL({dynamic : true}))
            .addFields(
                {
                    name: "Name: ",
                    value: member.user.username,
                    inline: true
                },
                {
                    name: "Discriminator : ",
                    value: `#${member.user.discriminator}`,
                    inline: true
                },
                {
                    name: "ID : ",
                    value: member.user.id,
                },
                {
                    name: "Current Status : ",
                    value: status,
                    inline: true
                },
                {
                    name: "Activity : ",
                    value: member.presence.activities[0] ? user.presence.activities[0].name : `User isn't playing a game!`,
                    inline: true
                },
                {
                    name: 'Avatar link : ',
                    value: `[Click Here](${member.user.displayAvatarURL()})`
                },
                {
                    name: 'Creation Date : ',
                    value: member.user.createdAt.toLocaleDateString("en-us"),
                    inline: true
                },
                {
                    name: 'Joined Date : ',
                    value: member.joinedAt.toLocaleDateString("en-us"),
                    inline: true
                },
                {
                    name: 'User Roles : ',
                    value: member.roles.cache.map(role => role.toString()).join(" ,"),
                    inline: true
                }
            )

        await message.channel.send(embed)
    }
}