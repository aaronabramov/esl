module.exports = {
    /**
     * create pg connect string
     */
    connString: function(username, host, db) {
        return 'postgres://' +
            username +
            '@' +
            host +
            '/' +
            db;
    }
}
