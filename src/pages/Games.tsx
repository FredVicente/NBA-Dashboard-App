import { Footer } from '../components/Footer/index'

import '../styles/Games.css'
import { useEffect } from 'react'

function Games(){

    return(
        <div className="games">
            <div>Games</div>
            <Footer page='games' />
        </div>
    )
}

export default Games