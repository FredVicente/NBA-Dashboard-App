import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IconHome, IconGames, IconTeams, IconPlayers } from './icons'

import './index.css'

type aceptedPages = 'home' | 'games' | 'teams' | 'players'

export function Footer(props:{page:aceptedPages}){

    const navigate = useNavigate()

    return(
        <footer className='myFooter'>
            <div 
                className={`menu-option-container ${props.page == 'home' ? 'selected-menu-option' : ''}`}
                onClick={() => {
                    navigate('/home')
                }}
            >
                <IconHome />
                <p className="menu-text">Home</p>
            </div>
            <div 
                className={`menu-option-container ${props.page == 'games' ? 'selected-menu-option' : ''}`}
                onClick={() => {
                    navigate('/games')
                }}
            >
                <IconGames />
                <p className="menu-text">Jogos</p>
            </div>
            <div 
                className={`menu-option-container ${props.page == 'teams' ? 'selected-menu-option' : ''}`}
                onClick={() => {
                    navigate('/teams')
                }}
            >
                <IconTeams />
                <p className="menu-text">Times</p>
            </div>
            <div 
                className={`menu-option-container ${props.page == 'players' ? 'selected-menu-option' : ''}`}
                onClick={() => {
                    navigate('/players')
                }}
            >
                <IconPlayers />
                <p className="menu-text">Atletas</p>
            </div>
        </footer>
    )
}