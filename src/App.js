import { useEffect, useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Classe from './componentes/Classe/Classe';
import Formulario from './componentes/Formulario/Formulario';
import Rodape from './componentes/Rodape/Rodape';
import hexToRgba from 'hex-to-rgba';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [classes,setClasses] = useState(
    JSON.parse(window.localStorage.getItem('classes')) ||
    [
      {
        id:uuidv4(),
        nome:'Tank',
        corPrimaria:'#57C278',
        corSecundaria:'#D9F7E9',
      },
      {
        id:uuidv4(),
        nome:'Fighter',
        corPrimaria:'#DB6EBF',
        corSecundaria:'#FAE9F5',
      },
      {
        id:uuidv4(),
        nome:'Slayer',
        corPrimaria:'#E06B69',
        corSecundaria:'#FDE7E8',
      },
      {
        id:uuidv4(),
        nome:'Mage',
        corPrimaria:'#82CFFA',
        corSecundaria:'#E8F8FF',
      },
      {
        id:uuidv4(),
        nome:'Controller',
        corPrimaria:'#A6D157',
        corSecundaria:'#F0F8E2',
      },
      {
        id:uuidv4(),
        nome:'Marksman',
        corPrimaria:'#FFBA05',
        corSecundaria:'#FFF5D9',
      }
    ]
  )
  const subclasses = {
    Tank:['Vanguard','Warden'],

    Fighter:['Juggernaut','Diver'],

    Slayer:['Assassin','Skirmisher'],

    Mage:['Burst Mage','Battle Mage','Artillery Mage'],

    Controller:['Enchanter','Disruptor'],

    Marksman:['Marksman']
  }
  
  const [campeoes,setCampeao] = useState(JSON.parse(window.localStorage.getItem('campeoes')) || [])
  const aoCadastrarCampeao = (campeao) => {
    setCampeao([...campeoes,{...campeao,ehFavorito:false}])
  }
  const deletarCampeao = (id) => {
    setCampeao(campeoes.filter(campeao => campeao.id!==id))
  }
  
  const alternarFavorito = (campeaoAlternado) => {
    console.log('alternando favorito');
    setCampeao(campeoes.map(campeao => {
      if (campeao.id === campeaoAlternado.id) {
        campeao.ehFavorito = !campeao.ehFavorito
      }
      return campeao
    }))
  }

  const mudarCorDaClasse = (cor,id)=>{
    setClasses(
      classes.map((classe)=>{
        if (classe.id === id) {
          classe.corPrimaria = cor;
          classe.corSecundaria = hexToRgba(cor,0.30)
        }
        return classe
      })
    )
  }

  useEffect(()=>{window.localStorage.setItem('classes',JSON.stringify(classes))})
  useEffect(() => window.localStorage.setItem('campeoes',JSON.stringify(campeoes)))

  return (
    <div className="App">
      <Banner />
      <Formulario aoCadastrarcampeao={(campeao)=>aoCadastrarCampeao(campeao)} campeoes={campeoes} classes={classes} subclasses={subclasses} />
      {
        classes.map(classe => <Classe 
          key={classe.id}
          id={classe.id}
          nome={classe.nome}
          corPrimaria={classe.corPrimaria} 
          corSecundaria={classe.corSecundaria}
          campeoes={campeoes.filter(campeao => campeao.classe===classe.nome)}
          aoDeletar={deletarCampeao}
          aoMudarCor={mudarCorDaClasse}
          aoAlternarFavorito={alternarFavorito}
          
        />)
      }
      <Rodape />
    </div>
  );
}

export default App;
