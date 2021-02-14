import React, { Component } from 'react';
import  footer  from './Footer.module.scss';

class Footer extends Component {
    render() {
        return (
            <div className={footer.footer}>
                <h6>Pushpendra This is footer</h6>
            </div>
        );
    }
}

export default Footer;