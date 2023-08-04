import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import { Loggin } from './Header-components';
import Buttons from './Header-components';
import { Logo  } from './Header-components';

class Header extends Component{
    render(){
        return(
            <div className='header-container'>
                <Logo />
                <Buttons />
                <Loggin />
            </div>
        )
    }
}

export default Header