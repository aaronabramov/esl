/** @jsx React.DOM */

var React = require('react'),
    LevelTest = require('./level_test.jsx'),
    INIT_CODE = '' +
    '(function() {' +
    '   var Application = require("./src/components/application.jsx");' +
    '})();';

module.exports = React.createClass({
    render: function() {
        return (
            <html>
                <head>
                    <script src='/assets/bundles/core.js?bundle=true'></script>
                </head>
                <body>
                    <div className="app-container">
                    </div>
                    <script dangerouslySetInnerHTML={{__html: INIT_CODE}} />
                </body>
            </html>
        );
    }
});
