import React from 'react';
import page from 'page';
import Router from './router';
import Container from './components/container.jsx';

class App {
    /**
     * @param {Dispatcher} dispatcher
     * @param {DOM} el dom element of the application
     */
    constructor({dispatcher, el}) {
        this.dispatcher = dispatcher;
        this.el = el;
        this.router = new Router({dispatcher});
    }

    initialize() {
        this.router.start();
        React.render(<Container />, this.el);
    }
}

export default App;
