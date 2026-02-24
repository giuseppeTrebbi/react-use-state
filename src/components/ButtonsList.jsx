import Card from "./Card"
import { languages } from "../assets/languages"
import { useState } from "react"

export default function ButtonsList() {
    const [linguaggio, setLinguaggio] = useState(languages[0])
    const [attivo, setAttivo] = useState(false)


    return (
        <>
        <div className="container m-5">
            <div className="btn-group" role="group" aria-label="Basic button group">
                {
                    languages.map((curLang) => (<button onClick={() => {
                        setLinguaggio(curLang)
                        setAttivo(true)
                        }} key={curLang.id} type="button" className={`btn mx-3 ${curLang.id === linguaggio.id ? "btn-warning" : "btn-primary"}`} >
                            {curLang.title}
                        </button>)
                    )
                }
            </div>
        </div>
        <Card titolo={linguaggio.title} descrizione={linguaggio.description} attivazione={attivo}/>
        </>
    )
}