import { useState } from 'react'
import logo from "../design/assets/Frame.svg"
import shapeimg from "../design/assets/shape.svg"
import searchimg from "../design/assets/Icons/Search.svg"

function App() {

  const [name, setName] = useState("");
  const handleNameChange = async (e) =>{
    setName(e.target.value);
  };


  return (
    <>
    <header>
      <div className="container-fluid">
        <div className="row row-cols-2 hd">
          <div className="col df js">
            <div className="logo">
              <img src={logo} alt="Init Name Service" />
            </div>
          </div>
          <div className="col df je">
            <div className="wallet white-b pointer df jc aic">
              <div className="text-14 connect">Connect Wallet</div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <article>
      <div className="container">
        <div className="row article">
          <div className="col-12 up">
            <div className="row row-up">
              <div className="col je df">
                <div className="shape">
                  <img src={shapeimg} alt="shape" />
                </div>
              </div>
              <div className="col-auto jc df">
                <div className="text-24b white-t">Get your name now</div>
              </div>
              <div className="col js df">
                <div className="shape">
                  <img src={shapeimg} alt="shape" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 down df jc aic">
            <div className="down-div">
              <div className="row">
                <div className="col">
                  <div className="row">
                    <div className="col-auto">
                      <div className="search">
                        <img src={searchimg} alt="Search" />
                      </div>
                    </div>
                    <div className="col grey text-48">
                      <div className="input-name">
                        <input
                          className="text-48"
                          placeholder='Claim your name'
                          type="text"
                          onChange={handleNameChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-auto">
                  <div className="text-48 purple df je">.ini</div>
                </div>
              </div>
            </div>
          </div>
          <div className={`col-12 df jc aic ${name !== "" ? "d-flex" : "d-none"}`} id="infoBox">
            <div className="check-name mt-3 df je aic">
              <div className="je">
                <button
                className="check-btn2 text-14 black jc df aic wallet"
                id="check"
              >
                Check
              </button>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </article>

    </>
  )
}

export default App
