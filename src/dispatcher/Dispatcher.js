var Dispatcher = (function() {
    var _callbacks = [];

    return {
        register: function(callback) {
            _callbacks.push(callback);
        },

        dispatch: function(payload) {
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
