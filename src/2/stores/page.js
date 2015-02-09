import EventEmitter from 'events';
import {ACTIONS, CHANGE_EVENT} from '../constants';

class PageStore extends EventEmitter {
    constructor({dispatcher}) {
        dispatcher.register(this.callback.bind(this));
        this.page = null;
    }

    callback(payload) {
        if (payload.action === ACTIONS.CHANGE_PAGE) {
            this.page = payload.data;
            this.emit(CHANGE_EVENT);
        }
    }
}

export default PageStore;
