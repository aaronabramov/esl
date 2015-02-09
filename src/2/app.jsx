import React from 'react';
import page from 'page';
import Router from './router';
import Container from './components/container.jsx';
import PageStore from './stores/page';

var BASE_ROUTE = '/course2';

class App {
    /**
     * @param {Dispatcher} dispatcher
     * @param {DOM} el dom element of the application
     */
    constructor({dispatcher, el}) {
        this.dispatcher = dispatcher;
        this.el = el;
        this.router = new Router({dispatcher, base: BASE_ROUTE});
        this.stores = {
            page: new PageStore({dispatcher})
        };
    }

    initialize() {
        this.router.start();
        React.render(<Container stores={this.stores} />, this.el);
    }
}

export default App;
