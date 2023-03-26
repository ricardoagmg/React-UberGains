
const Results = ({resultValues}) => {
    
    return (
        <div className="result-cards">
            {resultValues.ganhosApp && (
                <div className="card">
                    <h3>Ganhos nos apps</h3>
                    <p>R$ {resultValues.ganhosApp}</p>
                </div>
            )}
            
            {resultValues.gastos && (
                <div className="card gastos">
                    <h3>Gastos com gasolina</h3>
                    <p>R$ {resultValues.gastos}</p>
                </div>
            )}

            {resultValues.lucroLiquido && (
                <div className="card lucro">
                    <h3>Lucro líquido</h3>
                    <p>R$ {resultValues.lucroLiquido}</p>
                </div>
            )}
        </div>
     )
}

export default Results;
