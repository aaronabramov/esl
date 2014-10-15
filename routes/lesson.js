var express = require('express'),
    router = express.Router(),
    data = require('../src/data.js'),
    utils = require('../src/utils.js'),
    TYPES_IN_YML = ['quiz'];

router.get('/:id', function(req, res) {
    var lesson = data.getIn(['lessons', req.params.id]),
        items = lesson.get('items');

    // change item reference for actual item data
    // if `type` is one of thigs that are stored in .yml files then
    // try to get it from yml data and assoc into [type] key
    //
    // e.g.
    //
    // items: [
    //      {type: 'quiz', id: 'quizes/1'}
    // ]
    //
    // will become
    //
    // items: [
    //      {
    //          type: 'quiz',
    //          id: 'quizes/1',
    //          quiz: {data: 'quiz data here...'}
    //      }
    // ]
    //
    items = items.map(function(item) {
        if (!!~TYPES_IN_YML.indexOf(item.get('type'))) {
            return item.set(item.get('type'), data.getIn(item.get('id').split('/')));
        }
        return item;
    });

    res.json(lesson.set('items', items));
});

module.exports = router;
