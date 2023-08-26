import React, { useState } from 'react';
import './Switch.css'; // Estilo para o botão, você pode personalizá-lo conforme necessário

const Switch = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <button className={`toggle-switch ${isChecked ? 'checked' : ''}`} onClick={handleToggle}>
      <div className={`toggle-ball ${isChecked ? 'right' : 'left'}`} />
      <span className="toggle-text">{isChecked ? 'Sim' : ''}</span>
    </button>
  );
};

export default Switch;
