const { Message, MessageEmbed } = require('discord.js');
const { config } = require('dotenv');
const { getConfig, saveConfig } = require('../common/common');

class AdminCommand {

    constructor() {
        this.name = 'admin';
        this.aliases = ['devaps'];
        this.desc = 'For admin only ho!';
        this.usage = getConfig().prefix + 'admin';
    }

    /**
     * 
     * @param {Message} msg 
     * @param {string[]} args 
     */

    async execute(msg, args) {
        const { member, channel } = msg;
        const embed = new MessageEmbed();

        if (member.hasPermission('ADMINISTRATOR')) {
            if (!args.length) {
                embed.setDescription('Usage: **[' + getConfig().prefix + 'admin prefix]**')
                .setColor('RED');

                await channel.send(embed);
                return;
            }

            switch (args[0].toLowerCase()) {
                case 'prefix': {
                    const config = getConfig();
                    
                    if (args.length < 2) {
                        config.prefix = '!';
                    } else {
                        config.prefix = args[1];
                    }

                    saveConfig(config);
                    embed.setDescription('Bot prefix changed into `' + config.prefix + '`')
                        .setColor('GREEN');
                    
                    await channel.send(embed);
                    break;
                }
                default:
                    await this.execute(msg, []);
                    break;
            }
        } else {
            embed.setDescription('No Permision!')
            .setColor('RED');

            await channel.send(embed);
        }
    }
}

module.exports = AdminCommand;