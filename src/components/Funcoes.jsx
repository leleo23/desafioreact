import { useState } from 'react'
import './Funcoes.css'
import Funcionário from './Funcionário'
import Switch from './Switch'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';





function Funcoes() {
  
  const [count, setCount] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      nome,
      cpf,
      
    };

    enviarDadosParaServidor(formData);
  };

  const enviarDadosParaServidor = (formData) => {
   
    fetch("URL_DO_SERVIDOR", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Dados enviados com sucesso:", data);
        <span>Sucesso!</span>
      })
      .catch((error) => {
        console.error("Erro ao enviar dados:", error);
        <span>Erro!</span>
      });
  };


  const handleAddFuncionarioClick = () => {
    setShowForm(true);
    setExpanded(true);
    setShowForm(true);
  };

  const handleResetClick = () => {
    setShowForm(false);
    setExpanded(false);
    setShowForm(false);
  };

  return (
    <>
      
      <main className={`divform ${expanded ? 'expanded' : ''}`}>
        {!showForm && ( // Renderizar o conteúdo apenas se showForm for falso
          <div>
            <div className="divTitulo">
              <p>Funcionário(s)</p>
            </div>
            <div className="funcoes">
              <div className="adcFunc">
                <button className="btnAdc" onClick={handleAddFuncionarioClick}>
                  + Adicionar Funcionário
                </button>
              </div>
              <Funcionário
              nome="Daniel Alves da Silva"
              cpf="000.000.000-99"
              atividade="Ativ 00"
              cargo="Cargo 1"
              />
             <Funcionário
              nome="Gisele Torres Lopes"
              cpf="000.000.000-88"
              atividade="Ativ 01"
              cargo="Cargo 2"
              />
            </div>
            <div className="divetapa">
              <p>A Etapa está concluída?</p>
              <Switch />
            </div>
          </div>
        )}

        {showForm && (
          <>
            <div className="divtotal">
            <div className="divTitulo">
              <button className="btnvoltar" onClick={handleResetClick}>
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
              <p>Adicionar Funcionário</p>
            </div>

              <div className="atvin">
                <div className="tteste">
                  <p>O trabalhador está ativo ou inativo?</p>
                  <Switch />
                </div>
              </div>
              
              <div className="primeiroform">
                <form className='formcadastro' onSubmit={handleSubmit} action="">
                  <div className="nomeSex">
                    <div className="nome">
                      <label htmlFor="">Nome</label>
                      <input required className='inputForm' type="text" />
                    </div>

                    <div className="cpf">
                      <label htmlFor="">CPF</label>
                      <input required className='inputForm' type="text" />
                    </div>

                    <div className="rg">
                      <label htmlFor="">RG</label>
                      <input required className='inputForm' type="text" />
                    </div>
                  </div>

                  <div className="cpfRg">
                   <div className="sex">
                      <label htmlFor="">Sexo</label>
                      <div className="radio-options">
                        <label htmlFor="masculino">
                          <input type="radio" id="masculino" name="sexo" value="masculino" />
                          Masculino
                        </label>
                        <label htmlFor="feminino">
                          <input type="radio" id="feminino" name="sexo" value="feminino" />
                          Feminino
                        </label>
                      </div>
                      </div>

                      <div className="dtNascimento">
                        <label htmlFor="">Data de Nascimento</label>
                        <input placeholder='dd/mm/yyyy' className='inputForm' type="text"/>
                      </div>

                      <div className="cargo">
                       <label for="escolhercargo">Cargo</label>
                        <select className='inputFormselect' id="escolhercargo" name="escolhercargo">
                        <option value="Selecione">Selecione</option>
                        <option value="Desenvolvedor">Desenvolvedor</option>
                        <option value="Gestor">Gestor</option>
                        <option value="Outro">Outro</option>
                      </select>
                      </div>

                    </div>
                 
                </form>
              </div>

              <div className="segundoform">
                <form className='formEpi' action="">
                  <div className="pergunta">
                    <span>Quais EPIs o trabalhador usa na atividade?</span>
                    <div className="checkEPI">
                    <input type="checkbox" name="naousa" id="naousa" />
                    <label htmlFor="naousa">O trabalhador não usa EPI</label>
                    </div>
                  </div>

                <div className="testesteste">
                  <p>Selecione a atividade:</p>
                  <select className="escolherAtv" id="escolherAtv" name='escolherAtv'>
                  <option value="Atividade 1">Selecione</option>
                  <option value="Atividade 2">Atividade2</option>
                  <option value="Atividade 3">Atividade3</option>
                  <option value="Atividade 4">Atividade4</option>
                  </select>

                  <div className="selecioneEPI">
                    <span>Selecione o EPI:</span>
                    <span className='nmrCA'>Informe o número do CA:</span>
                  </div>

                  <div className="inputsEPI">
                    <div className="divSelect">
                      <select className='seguranca' name="seguranca" id="seguranca"></select>
                      <option value="Calçado de Segurança"></option>
                      <option value="Calçado"></option>
                      <option value="Outro"></option>
                    </div>
                    <div className="divCA">
                      <input className='seguranca' type="text" />
                    </div>
                  </div>
                </div>

                  <button className='outraAtividade'>Adicionar outra atividade</button>
                  
                </form>
              </div>
            </div>
          
          </>
        )}
      </main>
      
      
    </>
    
  )
}

export default Funcoes
