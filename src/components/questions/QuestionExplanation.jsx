/** @jsx React.DOM */

var QuestionExplanation = React.createClass({
    render: function() {
        return (
            <div className="question-footer">
                <div className="question-next">
                    <div className="question-explanation">You need to use the interrogative form.</div>

                    <button className="question-next-button">
                        <span className="glyphicon glyphicon-chevron-right"></span>
                        <span className="next-text">Next</span>
                    </button>
                </div>
            </div>
        );
    }
});

