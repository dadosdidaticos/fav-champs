import './ListaSuspensa.css';

const ListaSuspensaDependente = (props) => {
    const aoSelecionar = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className='lista-suspensa'>
            {props.classe && <label>{props.label}</label>}
            {props.classe && 
            <select value={props.subclasse} required={props.obrigatorio} onChange={aoSelecionar}>
                {
                    props.options[props.classe].map(option => {
                        return <option key={option}>{option}</option>
                    })
                }
            </select>}
        </div>       
    )
};

export default ListaSuspensaDependente;