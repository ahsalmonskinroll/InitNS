import { useState } from "react";
import logo from "../design/assets/Frame.svg";
import shapeimg from "../design/assets/shape.svg";
import searchimg from "../design/assets/Icons/Search.svg";
import checkimg from "../design/assets/Icons/Check.svg";
import addressimg from "../design/assets/Icons/Address.svg";
import copyimg from "../design/assets/Icons/Copy.svg";
import userimg from "../design/assets/Icons/User.svg";
import Navbar from "../components/navbar";

function Claim() {
  const [name, setName] = useState("");
  const handleNameChange = async (e) => {
    setName(e.target.value);
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
                        <p className="text-48 purple">
                          Register <span className="bold">“name.units”</span>{" "}
                          <br />
                          <span className="df jc">for 1 year</span>
                        </p>
                      </div>
                      <div className="col-12">
                        <div className="row">
                          <div className="col-12">
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
                          </div>
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
                          <div className="claim-btn white-b pointer df jc aic">
                            <div className="text-14">Connect Wallet</div>
                          </div>
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
