export default function ButtonsList() {
    const listaBottoni = [
        {
            id: 1,
            nome: "HTML"
        },
        {
            id: 2,
            nome: "CSS"
        },
        {
            id: 3,
            nome: "JavaScript"
        },
        {
            id: 4,
            nome: "Node.js"
        },
        {
            id: 5,
            nome: "Express"
        },
        {
            id: 6,
            nome: "ReactJS"
        }
    ]


    return (
        <div className="container my-5">
            <div className="btn-group" role="group" aria-label="Basic example">
                {
                    listaBottoni.map((bottone) => (
                        <button key={bottone.id} type="button" className="btn btn-primary mx-3">
                            {bottone.nome}
                        </button>)
                    )
                }
            </div>
        </div>
    )
}