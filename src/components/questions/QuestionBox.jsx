/** @jsx React.DOM */

var QuestionBox = React.createClass({
    render: function() {
        return (
            <div className="question-box">
                <div className="question-header">
                    <h1>Word Order in Questions</h1>
                </div>

                <div className="question-body">
                    <h2>... from England?</h2>
                    <div className="question-answers">
                        <button className="question-answer">You are</button>
                        <button className="question-answer">You</button>
                        <button className="question-answer">Are you</button>
                        <button className="question-answer">Are</button>
                    </div>
                </div>
            </div>
        );
    }
});
