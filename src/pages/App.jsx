import { useState } from "react";
import shapeimg from "../design/assets/shape.svg";
import searchimg from "../design/assets/icons/search.svg";
import searchredimg from "../design/assets/icons/searchred.svg";
import availableimg from "../design/assets/icons/check.svg";
import Navbar from "../components/navbar";
import { useNavigate } from "react-router-dom";

function App() {
  const [name, setName] = useState("");
  const [isAvailable, setIsAvailable] = useState(true);
  const navigate = useNavigate();

  const handleNameChange = async (e) => {
    setName(e.target.value);
  };
  const handleIsNameAvailable = async (e) => {};

  // check butonu değişimi
  const [button, setButton] = useState("");
  const [checked, setChecked] = useState(false);

  const handleButtonChange = (e) => {
    setButton(e.target.value);
  };

  const handleCheckClick = () => {
    setChecked(true); // "Check" butonuna basılınca içeriği değiştir
  };

  return (
    <>
      <Navbar />
      <article>
        <div className="container">
          <div className="row article">
            <div className="col-12 up df jc">
              <div className="unitWrapper">
                <div className="row row-up ">
                  <div className="col je df">
                    <div className="shape">
                      <img src={shapeimg} alt="shape" />
                    </div>
                  </div>
                  <div className="col-auto jc df">
                    <div className="text-24 bold white-t">
                      Get your name now
                    </div>
                  </div>
                  <div className="col js df">
                    <div className="shape">
                      <img src={shapeimg} alt="shape" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 middle df jc">
              <div className="unitWrapper">
                <div className={`down-div ${isAvailable}`}>
                  <div className="row">
                    <div className="col">
                      <div className="row">
                        <div className="col-auto">
                          <div className="search">
                            <img
                              src={isAvailable ? searchimg : searchredimg}
                              alt="Search"
                            />
                          </div>
                        </div>
                        <div className="col grey text-48 bold">
                          <div className="input-name">
                            <input
                              className={`text-48 ${isAvailable}`}
                              placeholder="Claim your name"
                              type="text"
                              onChange={handleNameChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-auto">
                      <div
                        className={`text-48 bold df je ${
                          isAvailable ? "purple" : "red"
                        }`}
                      >
                        .ini
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`col-12 down df jc aic ${
                name !== "" ? "d-flex" : "d-none"
              }`}
              id="infoBox"
            >
              <div className="unitWrapper">
                {!checked ? (
                  <div className="check-name mt-3 df je aic">
                    <div className="je">
                      <button
                        className="check-btn2 text-14 black jc df aic wallet"
                        // onClick={handleCheckClick}
                        // onClick = {() => setIsAvailable(!isAvailable)}
                        onClick={() => {
                          handleCheckClick();
                          handleIsNameAvailable();
                        }}
                      >
                        Check
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="check-name mt-3 df jc">
                    <div className="row check-div">
                      <div className="col df aic p-0">
                        <div className="row">
                          <div className="col-auto aic df je">
                            <div className="check-btn">
                              <img src={availableimg} alt="True" />
                            </div>
                          </div>
                          {isAvailable ? (
                            <div className="col text-24 white-t">
                              “{name}” is available.
                            </div>
                          ) : (
                            <div className="col text-24 red">
                              “{name}” is unavailable.`
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-auto df je aic p-0">
                        <button
                          className="claim-btn text-14 black jc df aic wallet"
                          onClick={() => navigate("/claim")}
                        >
                          Claim now
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default App;
