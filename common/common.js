const fs = require('fs');

const registeredCommand = {
    list: [],
    findCommand(name) {
        for (let tmp of this.list) {
            if (tmp.name === name) {
                return tmp;
            }
    
            for (let alias of tmp.aliases) {
                if (alias === name) {
                    return tmp;
                }
            }
        }
        
        return null;
    },
    addCommand(cmd) {
        this.list.push(cmd);
    }
}

module.exports = {
    registeredCommand: {
        list: [],
        findCommand(name) {
            for (let tmp of this.list) {
                if (tmp.name === name) {
                    return tmp;
                }
        
                for (let alias of tmp.aliases) {
                    if (alias === name) {
                        return tmp;
                    }
                }
            }
            
            return null;
        },

        addCommand(cmd) {
            this.list.push(cmd);
        }
    },

    getConfig() {
        //return require('../config.json').prefix;
        const content = fs.readFileSync('./config.json', { encoding: 'utf-8' });
        const config = JSON.parse(content);

        return config;
    },

    saveConfig(config) {
        const content = JSON.stringify(config, null, 4);
        fs.writeFileSync('./config.json', content, { encoding: 'utf8' });
    }
};