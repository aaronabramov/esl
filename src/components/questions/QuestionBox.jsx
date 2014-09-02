/** @jsx React.DOM */

var QuestionBox = React.createClass({
    getInitialState: function() {
        var question = QuestionsStore.getNextQuestion(),
            obj = {
                topic: '',
                answers: [],
                question: '',
                answer: '...'
            };

        if(question) {
            obj = {
                topic: question.topic,
                answers: question.answers,
                question: question.question,
                answer: '...'
            };
        }

        return obj;
    },

    componentDidMount: function() {
        bean.on(QuestionsStore, 'changed', this.handleChange);
    },

    componentWillUnmount: function() {
        bean.off(QuestionsStore, 'changed', this.handleChange);
    },

    handleChange: function() {
        var question = QuestionsStore.getNextQuestion(),
            obj = {
                topic: question.topic,
                answers: question.answers,
                question: question.question,
                answer: '...'
            };

        this.setState(obj);
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
                    <Answers setAnswer={this.setAnswer}
                             answers={answers}
                    />
                </div>

                <div className="question-footer">
                    <div className="question-next">
                        <div className="question-explanation">You need to use the interrogative form.</div>

                        <button className="question-next-button">
                            <span className="glyphicon glyphicon-chevron-right"></span>
                            <span className="next-text">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
});
