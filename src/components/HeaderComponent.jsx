import React, { Component } from 'react';
import StickyHeader from 'react-sticky-header';
import 'react-sticky-header/styles.css';

class HeaderComponent extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <StickyHeader
                    header = {                    
                        <div>
                            <header>
                                <nav className = 'navbar navbar-expand-md navbar-dark bg-black'>
                                <div><a href = '/' className = 'navbar-brand'>Aosandy Movie Catalog</a></div>
                                </nav>
                            </header>
                        </div>}
                >
                </StickyHeader>
            </div>
        );
    }
}

export default HeaderComponent;