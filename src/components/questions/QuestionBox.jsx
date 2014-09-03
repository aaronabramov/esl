/** @jsx React.DOM */

var QuestionBox = React.createClass({
    setAnswer: function(answer) {
        if(answer === null) {
            answer = '...';
        }

        this.setState({
            answer: answer
        });
    },

    render: function() {
        var question = this.props.question;

        return (
            <div className="question-box">
                <QuestionTopic topic={question.topic} />

                <div className="question-body">
                    <Question question={question.question}
                              answer={question.answer}
                    />
                    <Answers setAnswer={this.setAnswer}
                             answers={question.answers}
                    />
                </div>
            </div>
        );
    }
});
