import React, { Component } from 'react';

class FooterComponent extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <div className = 'footer'>
                    <span className = 'text-muted'>All Righ Reserved 2022 @aosandy</span>
                </div>
            </div>
        );
    }
}

export default FooterComponent;
