import React, { useState } from 'react';
import './App.css';
import Header from './components/header';
import Progress from './components/Progress';
import Funcoes from './components/Funcoes';

function App() {
  const [showForm, setShowForm] = useState(false); // Estado para controlar a exibição do formulário

  return (
    <body>
      <div className="divteste">
        <div className="menuLateral">
          <Header />
        </div>
        
        <div className="divTudo">
          <div className="conteudo">
            <div className="divtopo">
              <Progress />
            </div>
          </div>
          <div className="divinferior">
            <div className="divlorem">
              <div className="divtxt">
                <p>
                  titor. Suspendisse ex lorem, rhon fadum ligula tempus vehicula. Ut at tristique libero, nec efficitur dui. Aliquam erat volutpat. Fusce quam sem, tempus nec justo eget, luctus scelerisque velit. Nam sollicitudin purus urna, vitae ornare neque tincidunt vel. Proin ac lacinia erat, et commodo felis. Phasellus tempor tellus eu vulputate tempus.
                </p>
              </div>
            </div>
              <Funcoes /> 
          </div>
          <div className="divproxima">
            <button className='nextpage'>
              <p>Próximo passo</p>
            </button>
          </div>
        </div>
      </div>
    </body>
  );
}

export default App;
