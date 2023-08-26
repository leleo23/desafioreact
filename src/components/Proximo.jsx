import { useState } from 'react'
import './Proximo.css'





function Proximo() {
  const [count, setCount] = useState(0);

  return (
    <>
      
      
      <div className="divproxima">
            <button className='nextpage'>
              <p>Próximo passo</p>
            </button>
          </div>
      
      
    </>
  )
}

export default Proximo
