import React, { Component } from 'react';

class FooterComponent extends Component {
    constructor(props) {
        super(props);
        this.state={
        }
    }
    
    render() {
        return (
            <div>
                <footer className='footer'>
                    <span className='text-muted'>first CRUD 2023 by @Fitiavana</span>
                </footer>
            </div>
        );
    }
}

export default FooterComponent;