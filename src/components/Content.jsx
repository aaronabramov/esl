/** @jsx React.DOM */

var Content = React.createClass({
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

        return {question: obj};
    },

    componentDidMount: function() {
        bean.on(QuestionsStore, 'changed', this.handleChange);
    },

    componentWillUnmount: function() {
        bean.off(QuestionsStore, 'changed', this.handleChange);
    },

    handleChange: function() {
        var question = QuestionsStore.getNextQuestion(),
            obj;

        if(question !== 'end') {
            obj = {
                topic: question.topic,
                answers: question.answers,
                question: question.question,
                answer: '...'
            };

            this.setState({question: obj});
        } else {
            this.setState({end: true});
        }

    },

    render: function() {
        var component;

        if(!this.state.end) {
            component = <QuestionBox question={this.state.question} />;
        } else {
            component = <Score />;
        }

        return (
            <div className="content pure-u-1 pure-u-md-3-4">
                {component}
            </div>
        );
    }
});
