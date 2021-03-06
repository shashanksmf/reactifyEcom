import React, { Component } from 'react';
import logo from '../../assets/images/logo.png';
import serch from '../../assets/images/serch.png';
import person from '../../assets/images/person.jpg';
import lock from '../../assets/images/lock.png';
import sidear from '../../assets/images/sidear.png'
import shoping from '../../assets/images/shoping.png';
import arrow from '../../assets/images/arro-right.png';
import drop from '../../assets/images/drop.png';
import dar from '../../assets/images/dar.png';
import ic1 from '../../assets/images/ic1.png';
import ic2 from '../../assets/images/ic2.png';
import ic3 from '../../assets/images/ic3.png';


import './../../assets/scss/header/index.scss';
import './header.css'

class Header extends Component {

  state ={
    ismegaMenuData:null,
    megaMenuData:null,
    submenuData:[],
    isMegaMenuDataRender:false,
    megaMenuData:null
  }

   getMegaMenuData(){

   }

   componentDidMount() {
    fetch("http://inspiresofttech.com/on_demand/api/getMegamenu",
    {
      method: "POST",
      body: JSON.stringify()
    })
    .then(resp => resp.json())
    .then(data => {
      console.log("getMegamenu api rsponse",data);
      this.setState({
        ismegaMenuData:true,
        megaMenuData:data.data
      })

      },err=>{console.log("getMegamenu err",err)})
   }


  render() {

    console.log("mega emnus",this.state.megaMenuData  );
    const { megaMenuData=[] } = this.state;
    return (

      <div className="headerComponent">
        <div className="header">
          <div className="content">
            <div className="logo">
              <table height={56} cellPadding={0} cellSpacing={0}>
                <tbody><tr>
                    <td valign="middle">
                      <a href="#"><img src={logo} width={92} border={0} /></a>
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
                          <img src={serch} width={16} style={{marginTop: 5, cursor: 'pointer'}} />
                        </td>
                      </tr>
                    </tbody></table>
                </div>{/*sub*/}
              </div>{/*search*/}
            </div>{/*searchsec*/}
            <div className="misc">
              <table  height={56} style={{width: 'auto', borderRight: 'none'}} cellPadding={0} cellSpacing={0} border={0}>
                <tbody><tr>
                    <td valign="middle">
                      <a href="cart-item.html"><img src={ic3} width={23} className="m" /></a>
                    </td>
                    <td>
                      <a href="" />
                    </td>
                  </tr>
                </tbody></table>
              <table height={56} style={{width: 'auto'}} cellPadding={0} cellSpacing={0}>
                <tbody><tr>
                    <td>
                      <img src={ic2} width={15} className="mm" />
                    </td>
                    <td>
                      <a href={'/login'}>Login</a>
                    </td>
                  </tr>
                </tbody></table>
              <table height={56} style={{width: 'auto'}} cellPadding={0} cellSpacing={0}>
                <tbody><tr>
                    <td>
                      <img src={ic1} width={10} className="mmm" />
                    </td>
                    <td>
                      <a href={'/signup'}>Register</a>
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
        </div>
        <div className="menu">
          <div className="content">

          {megaMenuData && 
            megaMenuData.map(item => {
              return (
                <div className="men">
                <div className="menuWrapper"><a href="#">{item.categories_name}</a>
                  <img src={dar} width={8} style={{marginLeft: 2}} /></div>
                  
                  <div className="content">
        <div id="smbo" style={{display: 'block'}}>
          <div className="submenu">
                  {item.children.map((childItem,index) => {
                    var counter=++index;
                    return (
                      <div className={'sec'+counter}>
                        <a href="#">
                          <div className="sec1head">
                            <p>{childItem.categories_name}</p>
                            <img src={sidear} width={8} style={{marginTop: 29, marginLeft: 7}} />
                          </div>
                        </a>
                        {childItem.children.map(subChilditem => {
                          return (
                            <div className="sec1body">
                              <a href="#">
                                <div className="link">
                                  <p>{subChilditem.categories_name}</p>
                                </div>{/*link*/}
                              </a>
                            </div>
                          )
                        })}
                        
                      </div>
                    )
                  })}
                  </div>
                  </div>
                  </div>
                </div>
              )
            })
          }
           </div>{/*content*/}
        </div>
      </div>
    );
  }
};

export default Header;