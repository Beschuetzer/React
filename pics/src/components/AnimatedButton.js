import React from 'react';

export default class AnimatedButton extends React.Component {
    constructor() {
        super();
        this.state = {
            //initializing props to keep track of here
        };
    }
    render() {
        let classList = "ui animated button";
        if (this.props.isVertical) classList += " vertical";
        if (this.props.isFade) classList += " fade";

        return (
            <button className="ui button mini" type={this.props.type}>
                <div className={classList} style={{width: '100%'}}>
                    <div className="visible content">{this.props.visible}
                    </div>
                    <div className="hidden content">
                        {this.props.hidden}
                    </div>
                </div>
            </button>
        );
    }
}

AnimatedButton.defaultProps = {
    isVertical: false,
    isFade: false,
    type: '',
}