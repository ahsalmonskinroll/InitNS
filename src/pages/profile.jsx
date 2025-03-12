import { useState } from "react";
import logo from "../design/assets/Frame.svg";
import shapeimg from "../design/assets/shape.svg";
import searchimg from "../design/assets/Icons/Search.svg";
import checkimg from "../design/assets/Icons/Check.svg";
import addressimg from "../design/assets/Icons/Address.svg";
import userimg from "../design/assets/Icons/User.svg";
import copyimg from "../design/assets/Icons/Copy.svg";
import Navbar from "../components/navbar";

function Profile() {
  const [name, setName] = useState("");
  const [isClaimed, setIsClaimed] = useState(false);

  const handleNameChange = async (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <Navbar />
      <article>
        <div className="container">
          {
            !isClaimed ? 
          <div className="row">
            <div className="col-12 df jc">
              <div className="unitWrapper">
                <div className="row df aic">
                  <div className="col-auto">
                    <img src={checkimg} alt="True" />
                  </div>
                  <div className="col text-24 purple">
                    “{name}” is available.
                  </div>
                  <div className="col-auto">
                    <button
                      className="claim-btn text-14 black jc df aic pointer"
                      id="profile-claimed"
                      onClick={()=>setIsClaimed(true)}
                    >
                      Claim now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 df jc mt-3">
              <div className="unitWrapper df jc">
                <div className="row profile-down df jc">
                  <div className="innerWrapper">
                    <div className="col-12 js d-grid aic mb-3">
                      <div className="text-48g purple">name.units</div>
                    </div>
                    <div className="col-12 ">
                      <div className="row">
                        <div className="col-12 mb-3">
                          <div className="row">
                            <div className="col-auto">
                              <div className="text-24 medium white-t">
                                Address
                              </div>
                            </div>
                            <div className="col p-0 aie df">
                              <div className="line"></div>
                            </div>
                            <div className="col-auto">
                              <div className="text-24 medium white-t">
                                <div className="row">
                                  <div className="col df je">7sd7c...83bd7</div>
                                  <div className="col-auto p-0 df je">
                                    <div className="address pointer">
                                      <img src={copyimg} alt="icon" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="row">
                            <div className="col-auto">
                              <div className="text-24 medium white-t">
                                Ownership
                              </div>
                            </div>
                            <div className="col p-0 aie df">
                              <div className="line"></div>
                            </div>
                            <div className="col-auto">
                              <div className="text-24 medium white-t">
                                <div className="row">
                                  <div className="col df je">not owned</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          :
          <div className="row">
                      <div className="col-12 df jc">
                        <div className="unitWrapper">
                          <div className="row df aic">
                            <div className="col-auto">
                              <div className="profile-icon">
                                <img src={userimg} alt="Profile" />
                              </div>
                            </div>
                            <div className="col p-0">
                              <div className="text-24 white-t">Profile</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 df jc">
                        <div className="unitWrapper">
                          <div className="profile-down">
                            <div className="innerWrapper">
                              <div className="row">
                                <div className="col-12 js df aic">
                                  <div className="text-48 purple">name.units</div>
                                </div>
                                <div className="col-12 d-grid jc mt-4">
                                  <div className="row">
                                    <div className="col-12 mb-3">
                                      <div className="row">
                                        <div className="col-auto">
                                          <div className="text-24 white-t">Address</div>
                                        </div>
                                        <div className="col p-0 aie df">
                                          <div className="line"></div>
                                        </div>
                                        <div className="col-auto">
                                          <div className="text-24 white-t">
                                            <div className="row">
                                              <div className="col df je">
                                                7sd7c...83bd7
                                              </div>
                                              <div className="col-auto p-0 df je">
                                                <div className="address pointer">
                                                  <img src={copyimg} alt="icon" />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-12 mb-3">
                                      <div className="row">
                                        <div className="col-auto">
                                          <div className="text-24 white-t">
                                            Ownership
                                          </div>
                                        </div>
                                        <div className="col p-0 aie df">
                                          <div className="line"></div>
                                        </div>
                                        <div className="col-auto">
                                          <div className="text-24 white-t">
                                            <div className="row">
                                              <div className="col df je">owned</div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-12 mb-3">
                                      <div className="row">
                                        <div className="col-auto">
                                          <div className="text-24 white-t">Expiry</div>
                                        </div>
                                        <div className="col p-0 aie df">
                                          <div className="line"></div>
                                        </div>
                                        <div className="col-auto">
                                          <div className="text-24 white-t">
                                            <div className="row">
                                              <div className="col df je">
                                                25 June 2025
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

          }




        </div>
      </article>
    </>
  );
}

export default Profile;
