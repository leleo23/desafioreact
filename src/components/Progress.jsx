import { useState } from 'react'
import './Progress.css'
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';





function Progress() {
  const [count, setCount] = useState(0)

  return (
    <>
    
        <main>
        <div className="divprincipal">
            <div className="listaprogresso">
              <div className="dashed-line"></div>

              <div className="divitem1">
                <span>
                  <FontAwesomeIcon
                    icon={faBuilding}
                    style={{ color: 'white', fontSize: '25px', marginTop: '22px' }}
                  />
                </span>
                <p>ITEM</p>
              </div>

              <div className="divitemresto">
                <span>
                  <FontAwesomeIcon
                    icon={faBuilding}
                    style={{ color: 'white', fontSize: '25px', marginTop: '22px' }}
                  />
                </span>
                <p>ITEM </p>
              </div>

              <div className="divitemresto">
                <span>
                  <FontAwesomeIcon
                    icon={faBuilding}
                    style={{ color: 'white', fontSize: '25px', marginTop: '22px' }}
                  />
                </span>
                <p>ITEM </p>
              </div>

              <div className="divitemresto">
                <span>
                  <FontAwesomeIcon
                    icon={faBuilding}
                    style={{ color: 'white', fontSize: '25px', marginTop: '22px' }}
                  />
                </span>
                <p>ITEM </p>
              </div>

              <div className="divitemresto">
                <span>
                  <FontAwesomeIcon
                    icon={faBuilding}
                    style={{ color: 'white', fontSize: '25px', marginTop: '22px' }}
                  />
                </span>
                <p>ITEM </p>
              </div>

              <div className="divitemresto">
                <span>
                  <FontAwesomeIcon
                    icon={faBuilding}
                    style={{ color: 'white', fontSize: '25px', marginTop: '22px' }}
                  />
                </span>
                <p>ITEM </p>
              </div>

              <div className="divitemresto">
                <span>
                  <FontAwesomeIcon
                    icon={faBuilding}
                    style={{ color: 'white', fontSize: '25px', marginTop: '22px' }}
                  />
                </span>
                <p>ITEM </p>
              </div>

              <div className="divitemresto">
                <span>
                  <FontAwesomeIcon
                    icon={faBuilding}
                    style={{ color: 'white', fontSize: '25px', marginTop: '22px' }}
                  />
                </span>
                <p>ITEM </p>
              </div>

              <div className="divitemresto">
                <span>
                  <FontAwesomeIcon
                    icon={faBuilding}
                    style={{ color: 'white', fontSize: '25px', marginTop: '22px' }}
                  />
                </span>
                <p>ITEM </p>
              </div>

            </div>
        </div>
        </main>
    
    </>
  )
}

export default Progress