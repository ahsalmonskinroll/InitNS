import { useState } from 'react'
import logo from "../design/assets/Frame.svg"
import shapeimg from "../design/assets/shape.svg"
import searchimg from "../design/assets/Icons/Search.svg"

function Navbar() {

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
    </>
  )
}

export default Navbar
