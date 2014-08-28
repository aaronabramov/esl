/** @jsx React.DOM */

var App = React.createClass({
    render: function() {
        return (
            <div id="layout" class="pure-g">
                <Sidebar />
                <Content />
            </div>
        );
    }
});
