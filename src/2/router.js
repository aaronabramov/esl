import page from 'page';
import _ from 'lodash';
import {ACTIONS, PAGE_TYPES} from './constants';


var routes = {
    '/': function(ctx) {
        console.info('home');
    },
    '/videos/:id': function (ctx) {
        this.dispatcher.dispatch({
            action: ACTIONS.CHANGE_PAGE,
            data: {
                pageType: PAGE_TYPES.VIDEO,
                id: ctx.params.id
            }
        });
    },
    '*': function(cxt) {
        console.error('route not found');
    }
};

class Router {
    /**
     * @param {Dispatcher} dispatcher flux
     * @param {String} base url for the router
     */
    constructor({dispatcher, base}) {
        var _this = this;
        base && page.base(base);
        this.dispatcher = dispatcher;
        _.each(this.routes, (fn, route) => page(route, fn.bind(_this)));
    }

    start() {
        page.start();
    }
};

Router.prototype.routes = routes;

export default Router;
