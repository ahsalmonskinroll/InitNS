import { useState } from 'react'
import logo from "../design/assets/Frame.svg"
import shapeimg from "../design/assets/shape.svg"
import searchimg from "../design/assets/Icons/Search.svg"
import walletimg from "../design/assets/wallet.svg";
import { BrowserProvider, ethers } from 'ethers';

function Navbar() {

  const [address, setAddress] = useState(null);


  const handleConnetWallet = async () => {
    if (!window.ethereum){
      return
    }

    try{
      const provider = new ethers.BrowserProvider(window.ethereum)
      const signer = await provider.getSigner()
      const address = await signer.getAddress()
  
      setAddress(address)
      console.log(address);

    }
    catch(error){
      console.error(error)
    }

  }

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
            {address ? 
            
            <button className="wallet white-b pointer df jc aic">
              <div className="text-14 connect">{address}</div>
            </button>
            :
            <button className="wallet white-b pointer df jc aic" onClick={()=>handleConnetWallet()}>
            <div className="text-14 connect">Connect Wallet</div>
            </button>

            }


          </div>
        </div>
      </div>






      {/* Connect wallet sonrası gelecek görsel */}
      
      {/* <div className="wallet-border pointer df jc aic">
              <div className="row">
                <div className="col-auto p-0">
                  <div className="wallet-img">
                    <img src={walletimg} alt="wallet icon" />
                  </div>
                </div>
                <div className="col df aic">
                  <div className="text-14 white-t connect">a93nd...28dna</div>
                </div>
              </div>
            </div> */}
    </header>
    </>
  )
}

export default Navbar
