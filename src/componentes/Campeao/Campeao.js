import './Campeao.css'
import { AiFillCloseCircle } from 'react-icons/ai'
import { RiHeartAddLine,RiHeartFill } from 'react-icons/ri'
import BotaoLike from '../BotaoLike/BotaoLike'

const Campeao = (props) => {
    const alternarFavorito = () => {
        props.aoAlternarFavorito(props.campeao)
    }
    return (
        <div className='campeao'>
            <AiFillCloseCircle className='deletar' onClick={()=>props.aoDeletar(props.id)}/>
            <div className='cabecalho' style={{backgroundColor:props.cor}}>
                <img src={'http://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/'+props.campeao.nome+'.png'} alt={props.campeao.nome} />
            </div>
            <div className='rodape'>
                <h4>{props.campeao.nome}</h4>
                <h5>{props.campeao.subclasse}</h5>
                <BotaoLike alternarFavorito={alternarFavorito} ehFavorito={props.campeao.ehFavorito} />
            </div>
        </div>
    )
}

export default Campeao