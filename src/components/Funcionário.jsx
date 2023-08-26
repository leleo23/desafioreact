import React from 'react';
import './Funcionário.css';

function Funcionário(props) {
  return (
    <div className="outradiv">
      <div className="info">
        <p className="titulo-principal">{props.nome}</p>
        <div className="textos-menores">
          <div className='sub-txt'>
            <p>{props.cpf}</p>
          </div>
          <div className='sub-txt'>{props.atividade}</div>
          <div className='sub-txt'>{props.cargo}</div>
        </div>
      </div>
      <button className="restante">...</button>
    </div>
  );
}

export default Funcionário;
