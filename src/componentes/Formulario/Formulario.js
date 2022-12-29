import './Formulario.css';
import CampoTexto from '../CampoTexto/CampoTexto';
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa';
import ListaSuspensaDependente from '../ListaSuspensa/ListaSuspensaDependente';
import Botao from '../Botao/Botao';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function Formulario(props) {

    const [nome,setNome] = useState('')
    const [classe,setClasse] = useState('')
    const [subclasse,setSubclasse] = useState('')
    
    const [mensagem,setMensagem] = useState('')
    

    const aoSalvar = (evento) => {
        evento.preventDefault();
        
        props.aoCadastrarcampeao({
            id:uuidv4(),
            nome,
            classe,
            subclasse
        })

        setNome('')
        setClasse('')
        setSubclasse('')
        setMensagem('Campeão Adicionado com Sucesso!')
        setTimeout(() => setMensagem(''), 4000);
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Adicione seus campeões favoritos e como gosta de jogar com eles!</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite nome do campeão" 
                    valor={nome}
                    aoAlterado={(valor) => setNome(valor)} 
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Classe"
                    options={props.classes}
                    placeholder="Selecione uma classe"
                    classe={classe}
                    subclasses={props.subclasses}
                    aoAlterado={valor => setClasse(valor)}
                    setSubclasse={sub => setSubclasse(sub)}
                />
                {<ListaSuspensaDependente
                    obrigatorio={true}
                    label="Sub-classe principal"
                    options={props.subclasses}
                    placeholder="Selecione uma Subclasse"
                    classe={classe}
                    subclasse={subclasse}
                    aoAlterado={valor => setSubclasse(valor)}
                />}
                <Botao texto = "Adicionar Campeão"/>
                {mensagem && <h4>{mensagem}</h4>}
            </form>
        </section>
    )
}

export default Formulario