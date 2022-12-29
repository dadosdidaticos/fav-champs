import './BotaoLike.css'
import { RiHeartAddLine,RiHeartFill,RiHeartAddFill } from 'react-icons/ri'
import { useState } from 'react'

function BotaoLike(props) {
    const [ehHover,setHover] = useState(false)
    return (
        <div className='like'
            onClick={props.alternarFavorito}
            onMouseEnter={()=>setHover(true)}
            onMouseLeave={()=>setHover(false)}
        > 
            {props.ehFavorito 
                ? <RiHeartFill className='like-button' size={25} color={'red'}/> 
                : (ehHover 
                    ? <RiHeartAddFill className='like-button' size={25}/>
                    : <RiHeartAddLine className='like-button' size={25}/>)
            }
        </div>
    )
}

export default BotaoLike