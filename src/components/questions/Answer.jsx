/** @jsx React.DOM */

var Answer = React.createClass({
    handleMouseOver: function() {
        this.props.setAnswer(this.props.answer);
    },

    handleMouseOut: function() {
        this.props.setAnswer(null);
    },

    render: function() {
        var answer = this.props.answer;
        return (
            <button className="question-answer"
                    onMouseOver={this.handleMouseOver}
                    onMouseOut={this.handleMouseOut}
                    onClick={this.submitAnswer}>
                {answer}
            </button>
        );
    }
});
