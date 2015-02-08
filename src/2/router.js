import page from 'page';
import _ from 'lodash';


var routes = {
    '/videos/:id': function (ctx) {
        console.log(this, ctx);
    },
    '*': function(cxt) {
        console.error('route not found');
    }
};

class Router {
    constructor({dispatcher}) {
        var _this = this;
        this.dispatcher = dispatcher;
        _.each(this.routes, (fn, route) => page(route, fn.bind(_this)));
    }

    start() {
        page.start();
    }
};

Router.prototype.routes = routes;

export default Router;
