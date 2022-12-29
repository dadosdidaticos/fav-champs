import './Rodape.css'

const Rodape = () => {
    return(
        <footer className='rodape'>
            <div className='redes-sociais'>
                <img src='/imagens/fb.png' alt='facebook'/>
                <img src='/imagens/tw.png' alt='twitter'/>
                <img src='/imagens/ig.png' alt='instagram'/>
            </div>
            <img className='logo' src='/imagens/LoL_icon.svg' alt='logo'/>
            <p>Desenvolvido por <strong>Marcos</strong></p>

        </footer>
    )
}

export default Rodape