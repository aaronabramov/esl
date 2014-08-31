/** @jsx React.DOM */

var Answer = React.createClass({
    handleMouseOver: function() {
        this.props.setAnswer(this.props.answer);
    },

    handleMouseOut: function() {
        this.props.setAnswer(null);
    },

    handleClick: function() {
        // clear the focus immediately after receiving a click
        this.refs.answerButton.getDOMNode().blur();

        QuestionsActionCreator.submitAnswer(this.props.answer);
    },

    render: function() {
        var answer = this.props.answer;
        return (
            <button ref="answerButton"
                    className="question-answer"
                    onMouseOver={this.handleMouseOver}
                    onMouseOut={this.handleMouseOut}
                    onClick={this.handleClick}>
                {answer}
            </button>
        );
    }
});
