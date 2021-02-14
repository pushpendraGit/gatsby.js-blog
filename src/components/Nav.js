import React, { Component } from 'react';
import { Link, graphql, useStaticQuery } from "gatsby"
// import './Nav.scss';
import NavModule from './Nav.module.scss';


const Nav = () =>  {
 
    const  data  = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
        return (
            <div className={NavModule.navcontainer}>
                <h1 className='nav-logo'><Link className={NavModule.title} to='/'>{data.site.siteMetadata.author}</Link></h1>
                <div className='nav-list-container'><ul className={NavModule.navlistcontainer}>
                    <li><Link className={NavModule.navitem} activeClassName={NavModule.activeNavItem} to='/'>Home</Link></li>
                    <li><Link className={NavModule.navitem} activeClassName={NavModule.activeNavItem}  to='/blog'>Blog</Link></li>
                    <li><Link className={NavModule.navitem} activeClassName={NavModule.activeNavItem}  to='/contact'>Contact</Link></li>
                    <li><Link className={NavModule.navitem} activeClassName={NavModule.activeNavItem}  to='/aboutus'>About</Link></li>
                </ul>
                </div>
                
            </div>
        );
    }


export default Nav;