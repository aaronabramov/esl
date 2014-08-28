/** @jsx React.DOM */

var App = React.createClass({
    render: function() {
        return (
            <div id="layout" className="pure-g">
                <Sidebar />
                <Content />
            </div>
        );
    }
});
