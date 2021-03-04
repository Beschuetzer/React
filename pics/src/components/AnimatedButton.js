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
                <div class={classList} tabindex="0" style={{width: '100%'}}>
                    <div class="visible content">{this.props.visible}
                    </div>
                    <div class="hidden content">
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