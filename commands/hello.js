const Discord = require('discord.js');
const { getConfig } = require('../common/common');

class HelloCommand {

    constructor() {
        this.name = 'hello';
        this.aliases = ['hi', 'supp'];
        this.desc = 'Yippiyayyoo';
        this.usage = getConfig().prefix + 'hello [link/query]';
    }

    /**
     * 
     * @param {Discord.Message} msg 
     * @param {string[]} args 
     */

    async execute(msg, args) {
        const { channel: ch } = msg;

        if (args.length === 0) {
            await msg.channel.send('Invalid usage! Use **--hello [link/query]**');
            return;
        }

        switch (args[0].toLowerCase()) {
            case 'link':
                await ch.send('Nice link ma dude');
                break;
            case 'query':
                await ch.send('boooyaahh query');
                break;
            default:
                await ch.send('Please read the instruction from **--hello**')
                break;
        }
    }
}

module.exports = HelloCommand;