import React, { Component } from 'react';

class Header extends Component {
    render() {
      return (
  
        <div>
          <div className="header" onmouseover="ope1();">
            <div className="content">
              <div className="logo">
                <table height={56} cellPadding={0} cellSpacing={0}>
                  <tbody><tr>
                      <td valign="middle">
                        <a href="#"><img src="images/logo.png" width={92} border={0} /></a>
                      </td>
                    </tr>
                  </tbody></table>
              </div>{/*logo*/}
              <div className="searchsec">
                <div className="search">
                  <input type="text" className="txtt" placeholder="Search your favourite products and brands" />
                  <div className="sub">
                    <table width={40} height={36} cellPadding={0} cellSpacing={0}>
                      <tbody><tr>
                          <td valign="middle" align="center">
                            <img src="css/images/srch.png" width={16} style={{marginTop: 5, cursor: 'pointer'}} />
                          </td>
                        </tr>
                      </tbody></table>
                  </div>{/*sub*/}
                </div>{/*search*/}
              </div>{/*searchsec*/}
              <div className="misc">
                <table width height={56} style={{width: 'auto', borderRight: 'none'}} cellPadding={0} cellSpacing={0} border={0}>
                  <tbody><tr>
                      <td valign>
                        <a href="cart-item.html"><img src="images/ic3.png" width={23} className="m" /></a>
                      </td>
                      <td>
                        <a href />
                      </td>
                    </tr>
                  </tbody></table>
                <table height={56} style={{width: 'auto'}} cellPadding={0} cellSpacing={0}>
                  <tbody><tr>
                      <td>
                        <img src="images/ic2.png" width={15} className="mm" />
                      </td>
                      <td>
                        <a href="login.html">Login</a>
                      </td>
                    </tr>
                  </tbody></table>
                <table height={56} style={{width: 'auto'}} cellPadding={0} cellSpacing={0}>
                  <tbody><tr>
                      <td>
                        <img src="images/ic1.png" width={10} className="mmm" />
                      </td>
                      <td>
                        <a href="register.html">Register</a>
                      </td>
                    </tr>
                  </tbody></table>
              </div>{/*misc*/}
              <div className="search" id="sc" style={{}}>
                <input type="text" className="txtt" placeholder="Search your favourite items" />
                <div className="sub">
                  <table width={40} height={36} cellPadding={0} cellSpacing={0}>
                    <tbody><tr>
                        <td valign="middle" align="center">
                          <img src="css/images/srch.png" width={16} style={{marginTop: 5, cursor: 'pointer'}} />
                        </td>
                      </tr>
                    </tbody></table>
                </div>{/*sub*/}
              </div>{/*search*/}
            </div>{/*content*/}
            <div className="menu">
              <div className="content">
                <div className="men" onmouseover="ope();">
                  <a href="#">Electrical </a>
                  <img src="images/dar.png" width={8} style={{marginLeft: 2}} />
                </div>{/*men*/}
                <div className="men" onmouseover="ope();">
                  <a href="#">New</a>
                  <img src="images/dar.png" width={8} style={{marginLeft: 2}} />
                </div>{/*men*/}
                <div className="men" onmouseover="ope();">
                  <a href="#">Men</a>
                  <img src="images/dar.png" width={8} style={{marginLeft: 2}} />
                </div>{/*men*/}
                <div className="men">
                  <a href="#" onmouseover="ope();">Woman</a>
                  <img src="images/dar.png" width={8} style={{marginLeft: 2}} />
                </div>{/*men*/}
                <div className="men">
                  <a href="#" onmouseover="ope();">Kidswear</a>
                  <img src="images/dar.png" width={8} style={{marginLeft: 2}} />
                </div>{/*men*/}
                <div className="men">
                  <a href="#" onmouseover="ope();">Furniture</a>
                  <img src="images/dar.png" width={8} style={{marginLeft: 2}} />
                </div>{/*men*/}
                <div className="men">
                  <a href="#" onmouseover="ope();">Books</a>
                  <img src="images/dar.png" width={8} style={{marginLeft: 2}} />
                </div>{/*men*/}
                <div className="men">
                  <a href="#">Offers</a>
                </div>{/*men*/}
              </div>{/*content*/}
            </div>
          </div>
        </div>
      );
    }
  };

  export default Header;