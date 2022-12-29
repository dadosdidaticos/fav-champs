
import Campeao from '../Campeao/Campeao'
import './Classe.css'

const Classe = (props) => {
    return (
        props.campeoes.length > 0 && <section className='class' style={{backgroundColor:props.corSecundaria}} >
            <div className='class-wrapper'>
                <h3 style={{borderColor:props.corPrimaria}}>{props.nome}</h3>
                <input type='color' value={props.corPrimaria} className='input-cor' onChange={e => props.aoMudarCor(e.target.value,props.id)}/>
                <div className='campeao-wrapper'>
                    {props.campeoes.map(campeao => 
                        <Campeao
                            key={campeao.nome}
                            id={campeao.id}
                            campeao={campeao}
                            cor={props.corPrimaria}
                            aoDeletar={props.aoDeletar}
                            aoAlternarFavorito={props.aoAlternarFavorito}
                        />
                    )}
                </div>
            </div>
        </section>
    )
}

export default Classe