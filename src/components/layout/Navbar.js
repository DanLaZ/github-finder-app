import React, { Component } from 'react'
import PropTypes from 'prop-types'


export class Navbar extends Component {

    static defaultProps = {
        title:'Github Finder',
        icon: 'fab fa-github-alt'
    };

    render() {
        return (
            <nav className='navbar bg-primary'>
                <h1>
                    <i class={this.prop.icon}></i>{this.props}   
                    
                </h1>
            </nav>
        )
    }
}

export default Navbar
