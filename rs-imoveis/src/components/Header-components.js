import React from "react";


export function Loggin(){
    const avatar = "https://img.myloview.com/posters/default-avatar-profile-icon-vector-unknown-social-media-user-photo-700-209987478.jpg"
    return(
        <div className='header-loginButton-place'>
            <div className="profile-avatar">
            <img
                height="32"
                width="32"
                src={avatar}
            />
            </div>
            <button className="log-button">
                ENTRAR
            </button>
        </div>
    )
}

export function Logo(){
    return(
        <div className='header-logo-place'></div>
    )
}

export default function Buttons(){
    return(
        <div className='header-buttons-place'>
            <button className='newButton'>Comprar</button>
            <button className='newButton'>Alugar</button>
            <button className='newButton'>Sobre</button>            
        </div>

    )
}