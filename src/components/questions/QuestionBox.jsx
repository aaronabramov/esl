/** @jsx React.DOM */

var QuestionBox = React.createClass({
    getInitialState: function() {
        var question = QuestionsStore.getNextQuestion();

        return {
            topic: question.topic,
            answers: question.answers,
            question: question.question,
            answer: '...'
        };
    },

    setAnswer: function(answer) {
        if(answer === null) {
            answer = '...';
        }

        this.setState({
            answer: answer
        });
    },

    render: function() {
        var answers = this.state.answers;

        return (
            <div className="question-box">
                <QuestionTopic topic={this.state.topic} />

                <div className="question-body">
                    <Question question={this.state.question}
                              answer={this.state.answer}
                    />
                    <div className="question-answers">
                        {
                            answers.map(function(answer) {
                                return <Answer setAnswer={this.setAnswer}
                                               answer={answer}
                                        />;
                            }, this)
                        }
                    </div>
                </div>
            </div>
        );
    }
});
