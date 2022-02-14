import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IconHome, IconGames, IconTeams, IconPlayers } from './icons'

import './index.css'

type aceptedPages = 'home' | 'games' | 'teams' | 'players'

export function Footer(props:{page:aceptedPages}){

    const navigate = useNavigate()

    const itemMenu = [
        {
            name: 'home',
            url: '/home',
            label: 'Home',
            icon: <IconHome />
        },
        {
            name: 'games',
            url: '/games',
            label: 'Jogos',
            icon: <IconGames />
        },
        {
            name: 'teams',
            url: '/teams',
            label: 'Times',
            icon: <IconTeams />
        },
        {
            name: 'players',
            url: '/players',
            label: 'Atletas',
            icon: <IconPlayers />
        }
    ]
 
    return(
        <footer className='myFooter'>
            {itemMenu.map(item => (
                <div 
                    key={item.name}
                    className={`menu-option-container ${props.page == item.name && 'selected-menu-option'}`}
                    onClick={() => {
                        navigate(item.url)
                    }}
                >
                    {item.icon}
                    <p className="menu-text">{item.label}</p>
                </div>
            ))}
        </footer>
    )
}