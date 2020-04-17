import * as React from 'react';

export class NavigationLink extends React.Component {
    render() {
        return (
            <li className="navigation-link">
                <a href={this.props.link}>{this.props.text}</a>
            </li>
        )
    }
}