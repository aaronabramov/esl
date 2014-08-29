/** @jsx React.DOM */

var Question = React.createClass({
    generateQuestionString: function() {
        return this.props.question.replace('$', this.props.answer);
    },

    render: function() {
        var question = this.generateQuestionString();

        return (
            <h2>{question}</h2>
        );
    }

});
