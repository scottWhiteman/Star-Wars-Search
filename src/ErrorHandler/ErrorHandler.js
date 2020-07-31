import React from 'react';

export default class ErrorHandler extends React.Component {
    render() {
        return (this.props.error !== '' &&
            <div className="error-container">
                <h2>{this.props.error}</h2>
            </div>
        )
    }
}