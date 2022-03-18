import { useState, useEffect } from "react"
import Header from "../Header"
import IndividualCard from "../cards/IndividualCard"
import { Footer } from '../Footer'

type dataType = {
    name: string;
    imgUrl: string;
}[]

type defaultPageProps = {
    info:'teams' | 'players'
    originalData:dataType
    inputPlaceholder:string
}

export default function DefaultPage(props:defaultPageProps){

    const [searchedData, setSearchedData] = useState('')
    const [allData, setAllData] = useState<dataType>(props.originalData)

    useEffect(() => {
        const filteredData = props.originalData.filter( entry => entry.name.toLocaleLowerCase().includes(searchedData.toLocaleLowerCase()))
        setAllData(filteredData)
    }, [searchedData])

    // Garante que os dados serão mostrados na tela ao carregar. Revisar depois para achar uma alternativa melhor e o motivo de não mostrarem em primeiro lugar
    useEffect(() => {
        setSearchedData('a')
        setTimeout(() => {setSearchedData('')}, 10)
    }, [])

    return(
        <div className="page">
            <Header lastPage='home' title='JOGADORES'/>
            <main>
                <div className="input-container">
                    <input
                        type="text"
                        placeholder={props.inputPlaceholder}
                        onChange={(e) => {setSearchedData(e.target.value)}}
                        value={searchedData}
                    />
                </div>
                <div className="cards-container">
                    {allData?.slice(0, 30).map( data => {
                        return (
                            <IndividualCard
                                name={data.name}
                                imgUrl={data.imgUrl}
                                info={props.info}
                            />
                        )
                    })}
                </div>
            </main>
            <Footer page={props.info}/>
        </div>
    )
}