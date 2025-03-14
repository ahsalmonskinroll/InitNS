import { useState } from "react";
import userimg from "../design/assets/icons/user.svg";
import Navbar from "../components/navbar";
import { useNavigate } from "react-router-dom";

function Claim() {
  const [name, setName] = useState("");
  const navigateProfile = useNavigate();
  const handleNameChange = async (e) => {
    setName(e.target.value);
  };

  // ini ve usd arası geçiş efekti
  const ToggleCurrency = () => {
    const [activeCurrency, setActiveCurrency] = useState("eth");

    return (
      <div className="col-12">
        <div className="eth-usd">
          <div className="border-button">
            <div className="toggle-container">
              <div
                className={`toggle-btn eth text-24 ${
                  activeCurrency === "eth" ? "active" : "inactive"
                }`}
                onClick={() => setActiveCurrency("eth")}
              >
                ini
              </div>
              <div
                className={`toggle-btn usd text-24 ${
                  activeCurrency === "usd" ? "active" : "inactive"
                }`}
                onClick={() => setActiveCurrency("usd")}
              >
                USD
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Navbar />
      <article>
        <div className="container">
          <div className="row">
            <div className="col-12 df jc">
              <div className="unitWrapper dif jc">
                <div className="row claim-up df aic">
                  <div className="col df js p-0">
                    <div className="text-24 purple">name.units</div>
                  </div>
                  <div className="col df je">
                    <div className="row df aic gap-1 pointer" id="profile">
                      <div className="col p-0">
                        <div className="profile-icon">
                          <img src={userimg} alt="Profile" />
                        </div>
                      </div>
                      <div className="col p-0">
                        <div className="text-24b white-t">Profile</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 df jc">
              <div className="unitWrapper">
                <div className="profile-down">
                  <div className="innerWrapper">
                    <div className="row">
                      <div className="col-12 jc df aic">
                        <p className="text-48 purple text-center">
                          Register <span className="bold">“name.units”</span>{" "}
                          <br />
                          <span className="df jc">for 1 year</span>
                        </p>
                      </div>
                      <div className="col-12">
                        <div className="row">
                          <ToggleCurrency />
                          {/* <div className="col-12">
                            <div className="eth-usd">
                              <div className="border-button">
                                <div className="toggle-container">
                                  <div
                                    className="toggle-btn eth active text-24"
                                    id="eth"
                                  >
                                    ini
                                  </div>
                                  <div
                                    className="toggle-btn usd inactive text-24"
                                    id="usd"
                                  >
                                    USD
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div> */}
                          <div className="col-12">
                            <div className="row mt-3">
                              <div className="col-auto">
                                <div className="text-24 white-t">
                                  1 year registiration
                                </div>
                              </div>
                              <div className="col p-0 aie df">
                                <div className="line"></div>
                              </div>
                              <div className="col-auto">
                                <div className="text-24 white-t">10 ini</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 df jc my-4">
                          <button className="claim-btn white-b pointer df jc aic">
                            <div
                              className="text-14"
                              onClick={() => navigateProfile("/profile")}
                            >
                              Connect Wallet
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="row">
          <div className="col-12 df jc">
            <div className="row claim-up df aic">
              <div className="col">
                <div className="text-24b units_green">name.units</div>
              </div>
              <div className="col je df">
                <div className="row df aic gap-1 pointer" id="profile">
                  <div className="col p-0">
                    <div className="profile-icon">
                      <img src={userimg} alt="Profile" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="text-24b white-t">Profile</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 df jc">
            <div className="row claim-down">
              <div className="col-12 jc d-grid aic">
                <p className="text-48 units_green">
                  Register “name.units” <br /><span className="df jc"
                    >for 1 year</span
                  >
                </p>
              </div>
              <div className="col-12 d-grid jc">
                <div className="inner-container">
                  <div className="row">
                    <div className="col-12">
                      <div className="eth-usd">
                        <div className="border-button">
                          <div className="toggle-container">
                            <div className="toggle-btn eth active text-24b" id="eth">
                              ETH
                            </div>
                            <div className="toggle-btn usd inactive text-24b" id="usd">
                              USD
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="row mt-3">
                        <div className="col-auto">
                          <div className="text-24b white-t">
                            1 year registiration
                          </div>
                        </div>
                        <div className="col p-0 aie df">
                          <div className="line"></div>
                        </div>
                        <div className="col-auto">
                          <div className="text-24b white-t">10 UNITO</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 df jc my-5">
                  <div className="wallet white-b pointer df jc aic">
                    <div className="text-14 connect">Connect Wallet</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        </div>
      </article>
    </>
  );
}

export default Claim;
// export default ToggleCurrency;
