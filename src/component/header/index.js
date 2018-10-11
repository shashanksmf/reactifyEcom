import React, { Component } from 'react';
import logo from '../../assets/images/logo.png';
import serch from '../../assets/images/serch.png';
import person from '../../assets/images/person.jpg';
import lock from '../../assets/images/lock.png';
import shoping from '../../assets/images/shoping.png';
import arrow from '../../assets/images/arro-right.png';
import drop from '../../assets/images/drop.png';
import './../../assets/scss/header/index.scss';

class Header extends Component {
  
constructor(){
  // Dropdown funcation start
  super();

  this.state = {
        displayMenu: false,
      };
 
   this.showDropdownMenu = this.showDropdownMenu.bind(this);
   this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
 
 };
 
 showDropdownMenu(event) {
     event.preventDefault();
     this.setState({ displayMenu: true }, () => {
     document.addEventListener('click', this.hideDropdownMenu);
     });
   }
 
   hideDropdownMenu() {
     this.setState({ displayMenu: false }, () => {
       document.removeEventListener('click', this.hideDropdownMenu);
     });
 
   }// dropdown funcation End


  render() {
    return (
      <div id="parent" className="headerComponent">
      <div className="header" >
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
                      <img src={serch} width={16} style={{ marginTop: 5, cursor: 'pointer' }} />
                    </td>
                  </tr>
                  </tbody></table>
              </div>{/*sub*/}
            </div>{/*search*/}
          </div>{/*searchsec*/}
          <div className="misc">
            <table width height={56} style={{ width: 'auto', borderRight: 'none' }} cellPadding={0} cellSpacing={0} border={0}>
              <tbody><tr>
                <td valign>
                  <a href="cart-item.html"><img src={shoping} width={23} className="m" /></a>
                </td>
                <td>
                  <a href />
                </td>
              </tr>
              </tbody></table>
            <table height={56} style={{ width: 'auto' }} cellPadding={0} cellSpacing={0}>
              <tbody><tr>
                <td>
                  <img src={lock} width={15} className="mm" />
                </td>
                <td>
                  <a href="/login">Login</a>
                </td>
              </tr>
              </tbody></table>
            <table height={56} style={{ width: 'auto' }} cellPadding={0} cellSpacing={0}>
              <tbody><tr>
                <td>
                  <img src={person} width={10} className="mmm" />
                </td>
                <td>
                  <a href="/signup">Register</a>
                </td>
              </tr>
              </tbody></table>
          </div>{/*misc*/}
        </div>{/*content*/}
      </div>





      <div className="menu">
        <div className="content">
          <div className="men" onClick={this.showDropdownMenu} >
            <a href="#">Electrical </a>
            <img src={drop} width={8} style={{marginLeft: 2}} />
          </div>{/*men*/}
          <div className="men"onClick={this.showDropdownMenu}>
            <a href="#">New</a>
            <img src={drop} width={8} style={{marginLeft: 2}} />
          </div>{/*men*/}
          <div className="men"onClick={this.showDropdownMenu}>
            <a href="#">Men</a>
            <img src={drop} width={8} style={{marginLeft: 2}} />
          </div>{/*men*/}
          <div className="men">
            <a href="#"onClick={this.showDropdownMenu}>Woman</a>
            <img src={drop} width={8} style={{marginLeft: 2}} />
          </div>{/*men*/}
          <div className="men">
            <a href="#"onClick={this.showDropdownMenu}>Kidswear</a>
            <img src={drop} width={8} style={{marginLeft: 2}} />
          </div>{/*men*/}
          <div className="men">
            <a href="#"onClick={this.showDropdownMenu}>Furniture</a>
            <img src={drop} width={8} style={{marginLeft: 2}} />
          </div>{/*men*/}
          <div className="men">
            <a href="#"onClick={this.showDropdownMenu}>Books</a>
            <img src={drop} width={8} style={{marginLeft: 2}} />
          </div>{/*men*/}
          <div className="men">
            <a href="#">Offers</a>
          </div>{/*men*/}
        </div>{/*content*/}
      </div>



      {/* Add Drowdown function */}
      {this.state.displayMenu ?(



      <div className="content">
        <div id="smbo" style={{ display: 'block' }}>
          <div className="submenu">
            <div className="sec1">
              <a href="#">
                <div className="sec1head">
                  <p>Footwear</p>
                  <img src={arrow} width={8} style={{ marginTop: 15, marginLeft: 7 }} />
                </div>{/*sec1head*/}</a>
              <div className="sec1body">
                <a href="#"><div className="link">
                  <p>Sports Shoes</p>
                </div>{/*link*/}</a>
                <a href="#"><div className="link">
                  <p>Casual Shoes</p>
                </div>{/*link*/}</a>
                <a href="#"><div className="link">
                  <p>Formal Shoes</p>
                </div>{/*link*/}</a>
                <a href="#"><div className="link">
                  <p>Sandals &amp; Floaters</p>
                </div>{/*link*/}</a>
                <a href="#"><div className="link">
                  <p>Flip Flops</p>
                </div>{/*link*/}</a>
                <a href="#"><div className="link">
                  <p>Loafers</p>
                </div>{/*link*/}</a>
                <a href="#"><div className="link">
                  <p>Boots</p>
                </div>{/*link*/}</a>
                <a href="#"><div className="link">
                  <p>Running Shoes</p>
                </div>{/*link*/}</a>
                <a href="#"><div className="link">
                  <p>Sneakers</p>
                </div>{/*link*/}</a>
              </div>{/*sec1body*/}
              <a href="#"><div className="sec1head">
                <p>Men's Grooming</p>
                <img src={arrow} width={8} style={{ marginTop: 15, marginLeft: 7 }} />
              </div>{/*sec1head*/}</a>
              <div className="sec1body">
                <a href="#"><div className="link">
                  <p>Deodorants</p>
                </div>{/*link*/}</a>
                <a href="#"><div className="link">
                  <p>Perfumes</p>
                </div>{/*link*/}</a>
                <a href="#"><div className="link">
                  <p>Beard Care &amp; Grooming</p>
                </div>{/*link*/}</a>
                <a href="#"><div className="link">
                  <p>Shaving &amp; Aftershave</p>
                </div>{/*link*/}</a>
                <a href="#"><div className="link">
                  <p>Sexual Wellness</p>
                </div>{/*link*/}</a>
              </div>{/*sec1body*/}
            </div>{/*sec1*/}
            <div className="sec2">
              <a href="#">
                <div className="sec1head">
                  <p>Top wear</p>
                  <img src={arrow} width={5} style={{ marginTop: 15, marginLeft: 7 }} />
                </div>{/*sec1head*/}</a>
              <div className="sec1body">
                <a href="#"><div className="link">
                  <p>T-shirts</p>
                </div>{/*link*/}</a>
                <a href="#"><div className="link">
                  <p>Shirts</p>
                </div>{/*link*/}</a>
                <a href="#"><div className="link">
                  <p>Kurtas</p>
                </div>{/*link*/}</a>
                <a href="#"><div className="link">
                  <p>Suits &amp; Blazers</p>
                </div>{/*link*/}</a>
                <a href="#"><div className="link">
                  <p>Jackets</p>
                </div>{/*link*/}</a>
                <a href="#"><div className="link">
                  <p>SweatShirts</p>
                </div>{/*link*/}</a>
              </div>{/*sec1body*/}
              <a href="#"><div className="sec1head">
                <p>Bottom Wear</p>
                <img src={arrow} width={5} style={{ marginTop: 15, marginLeft: 7 }} />
              </div>{/*sec1head*/}</a>
              <div className="sec1body">
                <a href="#"><div className="link">
                  <p>Deodorants</p>
                </div>{/*link*/}</a>
                <a href="#"><div className="link">
                  <p>Jeans</p>
                </div>{/*link*/}</a>
                <a href="#"><div className="link">
                  <p>Trousers</p>
                </div>{/*link*/}</a>
                <a href="#"><div className="link">
                  <p>Shorts &amp; 3/4ths</p>
                </div>{/*link*/}</a>
                <a href="#"><div className="link">
                  <p>Cargos</p>
                </div>{/*link*/}</a>
                <a href="#"><div className="link">
                  <p>Track Pants</p>
                </div>{/*link*/}</a>
              </div>{/*sec1body*/}
            </div>{/*sec1*/}
            <div className="sec3">
              <a href="#">
                <div className="sec1head">
                  <p>Sports wear</p>
                  <img src={arrow} width={8} style={{ marginTop: 15, marginLeft: 7 }} />
                </div>{/*sec1head*/}</a>
              <div className="sec1body">
                <a href="#"><div className="link">
                  <p>Sports T-shirts</p>
                </div>{/*link*/}</a>
                <a href="#"><div className="link">
                  <p>Track Pants</p>
                </div>{/*link*/}</a>
                <a href="#"><div className="link">
                  <p>Track Suits</p>
                </div>{/*link*/}</a>
                <a href="#"><div className="link">
                  <p>Shorts</p>
                </div>{/*link*/}</a>
              </div>{/*sec1body*/}
              <a href="#"><div className="sec1head">
                <p>Innerwear &amp; Sleepwear</p>
                <img src={arrow} width={8} style={{ marginTop: 15, marginLeft: 7 }} />
              </div>{/*sec1head*/}</a>
              <div className="sec1body">
                <a href="#"><div className="link">
                  <p>Briefs &amp; Trunks</p>
                </div>{/*link*/}</a>
                <a href="#"><div className="link">
                  <p>Vests</p>
                </div>{/*link*/}</a>
                <a href="#"><div className="link">
                  <p>Boxers</p>
                </div>{/*link*/}</a>
                <a href="#"><div className="link">
                  <p>Thermals</p>
                </div>{/*link*/}</a>
                <a href="#"><div className="sec1head">
                  <p>Ties, Socks, Caps &amp; more</p>
                  <img src={arrow} width={8} style={{ marginTop: 15, marginLeft: 7 }} />
                </div>{/*sec1head*/}</a>
                <a href="#"><div className="sec1head">
                  <p>Kurta, Pyjama &amp; more</p>
                  <img src={arrow} width={8} style={{ marginTop: 15, marginLeft: 7 }} />
                </div>{/*sec1head*/}</a>
                <a href="#"><div className="sec1head">
                  <p>Winter wear</p>
                  <img src={arrow} width={8} style={{ marginTop: 15, marginLeft: 7 }} />
                </div>{/*sec1head*/}</a>
                <a href="#"><div className="sec1head">
                  <p>Fabrics</p>
                  <img src={arrow} width={8} style={{ marginTop: 15, marginLeft: 7 }} />
                </div>{/*sec1head*/}</a>
              </div>{/*sec1body*/}
            </div>{/*sec1*/}
            <div className="sec4">
              <a href="#">
                <div className="sec1head">
                  <p>Watches</p>
                  <img src={arrow} width={5} style={{ marginTop: 15, marginLeft: 7 }} />
                </div>{/*sec1head*/}</a>
              <div className="sec1body">
                <a href="#"><div className="link">
                  <p>Fastrack</p>
                </div>{/*link*/}</a>
                <a href="#"><div className="link">
                  <p>Casio</p>
                </div>{/*link*/}</a>
                <a href="#"><div className="link">
                  <p>Titan</p>
                </div>{/*link*/}</a>
                <a href="#"><div className="link">
                  <p>Fossil</p>
                </div>{/*link*/}</a>
                <a href="#"><div className="link">
                  <p>Sonata</p>
                </div>{/*link*/}</a>
              </div>{/*sec1body*/}
              <a href="#"><div className="sec1head">
                <p>Accessories</p>
                <img src={arrow} width={5} style={{ marginTop: 15, marginLeft: 7 }} />
              </div>{/*sec1head*/}</a>
              <div className="sec1body">
                <a href="#"><div className="link">
                  <p>Backpacks</p>
                </div>{/*link*/}</a>
                <a href="#"><div className="link">
                  <p>Wallets</p>
                </div>{/*link*/}</a>
                <a href="#"><div className="link">
                  <p>Belts</p>
                </div>{/*link*/}</a>
                <a href="#"><div className="link">
                  <p>Sunglasses</p>
                </div>{/*link*/}</a>
                <a href="#"><div className="link">
                  <p>Luggage &amp; Travel</p>
                </div>{/*link*/}</a>
                <a href="#"><div className="link">
                  <p>Frames</p>
                </div>{/*link*/}</a>
                <a href="#"><div className="link">
                  <p>Jewellery</p>
                </div>{/*link*/}</a>
              </div>{/*sec1body*/}
              <a href="#"><div className="sec1head">
                <p>Sports &amp; Fitness store</p>
                <img src={arrow} width={5} style={{ marginTop: 15, marginLeft: 7 }} />
              </div>{/*sec1head*/}</a>
            </div>{/*sec1*/}
            <div className="sec5">
              <a href="#">
                <div className="sec1head">
                  <p>Smart Watches</p>
                  <img src={arrow} width={8} style={{ marginTop: 15, marginLeft: 7 }} />
                </div>{/*sec1head*/}</a>
              <a href="#">
                <div className="sec1head">
                  <p>Smart Brands</p>
                  <img src={arrow} width={8} style={{ marginTop: 15, marginLeft: 7 }} />
                </div>{/*sec1head*/}</a>
              <a href="#">
                <div className="sec1head">
                  <p>Personal Care Appliances</p>
                  <img src={arrow} width={8} style={{ marginTop: 15, marginLeft: 7 }} />
                </div>{/*sec1head*/}</a>
              <div className="sec1body">
                <a href="#"><div className="link">
                  <p>Trimmers</p>
                </div>{/*link*/}</a>
                <a href="#"><div className="link">
                  <p>Shavers</p>
                </div>{/*link*/}</a>
                <a href="#"><div className="link">
                  <p>Grooming Kits</p>
                </div>{/*link*/}</a>
              </div>{/*sec1body*/}
              <a href="#"><div className="sec1head">
                <p>Featured</p>
                <img src={arrow} width={8} style={{ marginTop: 15, marginLeft: 7 }} />
              </div>{/*sec1head*/}</a>
              <div className="sec1body">
                <a href="#"><div className="link">
                  <p>Watches Store</p>
                </div>{/*link*/}</a>
                <a href="#"><div className="link">
                  <p>Footwear Club</p>
                </div>{/*link*/}</a>
                <a href="#"><div className="link">
                  <p>Bags &amp; Wallets</p>
                </div>{/*link*/}</a>
                <a href="#"><div className="link">
                  <p>T-shirt Store</p>
                </div>{/*link*/}</a>
                <a href="#"><div className="link">
                  <p>Adidas</p>
                </div>{/*link*/}</a>
                <a href="#"><div className="link">
                  <p>Beardo</p>
                </div>{/*link*/}</a>
                <a href="#"><div className="link">
                  <p>Reebok</p>
                </div>{/*link*/}</a>
                <a href="#"><div className="link">
                  <p>Nike</p>
                </div>{/*link*/}</a>
                <a href="#"><div className="link">
                  <p>Puma</p>
                </div>{/*link*/}</a>
              </div>{/*sec1body*/}
            </div>{/*sec1*/}
          </div>{/*submenu*/}
        </div>
      </div>
          ):
          (
            null
          )
        }
</div>

  








      );
  }
};

export default Header;