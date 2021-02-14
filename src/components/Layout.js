import React, { Component } from 'react';
import Nav from './Nav';
import '../styles/index.scss';
import layStyle from './Layout.module.scss';
import Footer from './Footer';

class Layout extends Component {
    render() {
        return (
            <div className={layStyle.container}>
                <div className={layStyle.content}>
                <Nav />
                {this.props.children}
               </div>
                <Footer />
            </div>
        );
    }
}

export default Layout;