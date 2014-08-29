/** @jsx React.DOM */

var QuestionTopic = React.createClass({
    render: function() {
        return (
            <h1 className="question-topic">{this.props.topic}</h1>
        );
    }
});
