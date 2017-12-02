import React, { Component } from 'react';
class Body extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return[
            <div>
            <div id="page" className="wrapper">
              <a className="skip-link screen-reader-text" href="#content">Skip to content</a>
              <div id="tb-preloader"><div className="tb-preloader-wave" /></div>
              <header id="header" role="banner" className="bucket-header bucket-header-overflow has-bucket-navbar-expand">
                <nav className="bucket-navbar bucket-navbar-top bucket-navbar-sticky bucket-navbar-expand bucket-navbar-transparent bucket-navbar-transparent-light">
                  <div className="container">
                    <div id="massive-menu" className="menuzord">
                      <a className="logo-brand" href="http://massive.themebucket.net/" title="Massive"><img src="wp-content/uploads/2016/01/massive-logo-dark.png" data-retina="wp-content/uploads/2016/01/massive-dark-logo@2x.png" alt="Massive" /></a><ul id="menu-x-one-page-default" role="menubar" className="menuzord-menu menuzord-right bucket-nav-standard"><li id="menu-item-2144" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2144" role="menuitem"><a href="/">HOME</a></li>
                        <li id="menu-item-2145" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2145" role="menuitem"><a href="#aboutus">ABOUT US</a></li>
                        <li id="menu-item-2146" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2146" role="menuitem"><a href="#team">CONTACT US</a></li>
                        <li id="menu-item-2147" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2147" role="menuitem"><a href="/login">LOG IN</a></li>
                        <li className="nav-icon nav-divider"><a href="javascript:void(0)">|</a></li>        <li className="nav-icon cart-info">
                        </li><li id="menu-item-2148" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2148" role="menuitem"><a href="/signup">JOIN</a></li>
                        <div className="megamenu megamenu-quarter-width">
                          <div className="megamenu-row">
                            <div className="col12">
                              <ul className="massive-minicart cart_list product_list_widget ">
                                <li className="empty">No products in the cart.</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <li className="nav-icon">
                          <div className="megamenu megamenu-quarter-width search-box">
                            <form role="search" method="get" action="http://massive.themebucket.net/" autoComplete="off">
                              <label className="sr-only" htmlFor="nav-search-form">Search for:</label>
                              <input type="text" id="nav-search-form" name="s" className="form-control" placeholder="Search Here..." />
                            </form>
                          </div>
                        </li>
                      </ul>          </div>
                  </div>
                </nav>
              </header>
            </div>{/* .post-grid */}
            <div className="vc_row-full-width vc_clearfix" /><div className="vc_row-full-width vc_clearfix" />
            {/* #content */}
            <div style={{minHeight: 500, background: '#f5f5f5'}}>
              <br />
              <br />
              <br />
              <br />
              <div style={{position: 'relative', left: '28%', minHeight: 50, width: '40.33%', background: '#fff', WebkitBoxShadow: '-1px 1px 13px black', zIndex: 99, borderRadius: 10}}>
                <center>
                  <br />
                  <br />
                  <div className="heading-title-alt border text-center Massive158bbce44871d3a3c8b4f113b7ab70b2">
                    <h3 className="ctitle-border black-color">SIGN UP</h3>        <span className="cst-color">All fields are required.</span>
                  </div>
                  <p style={{color: 'indianred', fontWeight: 'bold', margin: 'auto'}}> First Name: </p>
                  <input id="Massivee3f18aba48576bb1fa4cbc33f0a3e769-id" type="text" className="form-control" style={{width: '55%'}} placeholder="Juan" name="Firstname" />
                  <p style={{color: 'indianred', fontWeight: 'bold', margin: 'auto'}}> Last Name: </p>
                  <input id="Massivee3f18aba48576bb1fa4cbc33f0a3e769-id" type="text" className="form-control" style={{width: '55%'}} placeholder="Dela Cruz" name="Lastname" />
                  <p style={{color: 'indianred', fontWeight: 'bold', margin: 'auto'}}> E-mail: </p>
                  <input id="Massivee3f18aba48576bb1fa4cbc33f0a3e769-id" type="email" className="form-control" style={{width: '55%'}} placeholder="juandelacruz@gmail.com" name="Email" />
                  <p style={{color: 'indianred', fontWeight: 'bold', margin: 'auto'}}> Password: </p>
                  <input id="Massivee3f18aba48576bb1fa4cbc33f0a3e769-id" type="password" className="form-control" style={{width: '55%'}} placeholder="Enter your Password" name="Lastname" />
                  <p style={{color: 'indianred', fontWeight: 'bold', margin: 'auto'}}> Mobile Number: </p>
                  <input id="Massivee3f18aba48576bb1fa4cbc33f0a3e769-id" type="number" className="form-control" style={{width: '55%'}} placeholder="09991234567" name="Lastname" />
                  <p style={{color: 'indianred', fontWeight: 'bold', margin: 'auto'}}> Birthday: </p>
                  <input id="Massivee3f18aba48576bb1fa4cbc33f0a3e769-id" type="date" className="form-control" style={{width: '55%'}} placeholder="Enter your Last name" name="Lastname" />
                  <p style={{color: 'indianred', fontWeight: 'bold', margin: 'auto'}}> Blood Type: </p>
                  <select name="rating" id style={{width: '55%'}} className="form-control">
                    <option value>Blood Type</option>
                    <option value={5}>A+</option>
                    <option value={5}>A-</option>
                    <option value={4}>B+</option>
                    <option value={4}>B-</option>
                    <option value={3}>AB+</option>
                    <option value={3}>AB-</option>
                    <option value={2}>O+</option>
                    <option value={2}>O-</option>
                    <option value={1}>Others:</option>
                  </select>
                  <br />
                  <br />
                  <a className="btn btn-dark-solid btn-medium " type="submit" target="_blank">Signup</a>
                  <br />
                  <br />
                  <br />
                  <center>
                  </center></center></div>
                <br /><br /><br />
            </div>
          </div>
        ];
    }
}

export default Body;