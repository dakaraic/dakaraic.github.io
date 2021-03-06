import * as React from 'react';

export class Button extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <a href={this.props.link} target="_" className="button">{this.props.text}</a>
        )
    }
}