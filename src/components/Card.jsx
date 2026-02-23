export default function Card({ titolo, descrizione, attivazione }) {
    return (
        <div className="container">
            <div className="card" style={{ width: "60rem" }}  >
                <div className="card-body">
                    { attivazione ? 
                        <> <h5 className="card-title">{titolo}</h5> <p className="card-text"> {descrizione}</p> </>
                        : <> <h5 className="card-title">Nessun Linguaggio Selezionato</h5> </>
                }
                </div>
            </div>
        </div>
    )
}