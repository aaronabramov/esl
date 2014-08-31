/** @jsx React.DOM */

var Answer = React.createClass({
    handleMouseOver: function() {
        this.props.setAnswer(this.props.answer);
    },

    handleMouseOut: function() {
        this.props.setAnswer(null);
    },

    handleClick: function() {
        QuestionsActionCreator.submitAnswer(this.props.answer);
    },

    render: function() {
        var answer = this.props.answer;
        return (
            <button className="question-answer"
                    onMouseOver={this.handleMouseOver}
                    onMouseOut={this.handleMouseOut}
                    onClick={this.handleClick}>
                {answer}
            </button>
        );
    }
});
