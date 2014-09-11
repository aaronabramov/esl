var config = require('config');

module.exports = {
    /**
     * create pg connect string
     */
    connString: function() {
        return 'postgres://' +
            config.get('db.user') +
            '@' +
            config.get('db.host') +
            '/' +
            config.get('db.name');
    }
}
