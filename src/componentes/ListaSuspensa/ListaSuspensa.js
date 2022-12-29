import './ListaSuspensa.css';

const ListaSuspensa = (props) => {
    const aoSelecionar = (evento) => {
        props.aoAlterado(evento.target.value)
        props.setSubclasse(props.subclasses[evento.target.value][0])
    }

    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select value={props.classe} required={props.obrigatorio} onChange={aoSelecionar}>
                <option value="" disabled defaultValue={""}>Selecione...</option>
                {
                    props.options.map(option => {
                        return <option key={option.nome}>{option.nome}</option>
                    })
                }
            </select>
        </div>       
    )
};

export default ListaSuspensa;