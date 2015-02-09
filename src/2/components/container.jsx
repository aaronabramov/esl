import React from 'react'

class Container extends React.Component {
    render() {
        return (
            <div className='l-container'>
                <div className='l-navigation'>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                    </ul>
                </div>
                <div className='l-content'>
                    <h1>Test</h1>
                </div>
            </div>
        );
    }
}

export default Container;
