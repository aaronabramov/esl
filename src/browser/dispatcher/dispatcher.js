module.exports = (function() {
    var _callbacks = [];

    return {
        register: function(callback) {
            _callbacks.push(callback);
        },

        dispatch: function(payload) {
            // console.log(payload);
            _callbacks.forEach(function(callback) {
                callback(payload);
            });
        },

        handleViewAction: function(action) {
            this.dispatch({
                source: 'VIEW_ACTION',
                action: action
            });
        },

        handleServerAction: function(action) {
            this.dispatch({
                source: 'SERVER_ACTION',
                action: action
            });
        }
    };
})();
