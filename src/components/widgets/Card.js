import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-header">{this.props.header}</div>
                <div className="card-body">
                    {this.props.content}
                </div>
            </div>
        );
    }
}

export default Card;