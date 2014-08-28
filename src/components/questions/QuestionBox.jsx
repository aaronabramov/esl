/** @jsx React.DOM */

var QuestionBox = React.createClass({
    getInitialState: function() {
        return {
            answers: ['You are', 'You', 'Are you', 'Are'],
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
                <div className="question-header">
                    <h1>Word Order in Questions</h1>
                </div>

                <div className="question-body">
                    <h2>{this.state.answer} from England?</h2>
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
