import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';

class Header extends Component{
    render(){
        return(
            <div className='header-container'>
                <div className='header-logo-place'> montserrat</div>
                <div className='header-buttons-place'>
                    <button className='newButton'>Comprar</button>
                    <button className='newButton'>Alugar</button>
                    <button className='newButton'>Sobre</button>
                </div>
                <div className='header-loginButton-place'></div>
            </div>
        )
    }
}

export default Header