const path = require('path')

module.exports = {
    assets: {
        presets: ['sass'],
    },
    themes: {
        development: {
            id: 'ID',
            password: 'PASSWORD',
            store: 'NAME.myshopify.com',
            ignore: [
                'settings_data.json', // leave this here to avoid overriding theme settings on sync
            ],
        },
    },
}
