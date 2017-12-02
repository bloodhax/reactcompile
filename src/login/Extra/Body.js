import React, { Component } from 'react';
class Body extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return[
            <div id="page" className="wrapper">
            <a className="skip-link screen-reader-text" href="#content">Skip to content</a>
            <div id="tb-preloader"><div className="tb-preloader-wave" /></div>
            <header id="header" role="banner" className="bucket-header bucket-header-overflow has-bucket-navbar-expand">
              <nav className="bucket-navbar bucket-navbar-top bucket-navbar-sticky bucket-navbar-expand bucket-navbar-transparent bucket-navbar-transparent-light">
                <div className="container">
                  <div id="massive-menu" className="menuzord">
                    <a className="logo-brand" href="http://massive.themebucket.net/" title="Massive"><img src="wp-content/uploads/2016/01/massive-logo-dark.png" data-retina="wp-content/uploads/2016/01/massive-dark-logo@2x.png" alt="Massive" /></a><ul id="menu-x-one-page-default" role="menubar" className="menuzord-menu menuzord-right bucket-nav-standard"><li id="menu-item-2144" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2144" role="menuitem"><a href="#">HOME</a></li>
                      <li id="menu-item-2145" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2145" role="menuitem"><a href="#aboutus">ABOUT US</a></li>
                      <li id="menu-item-2146" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2146" role="menuitem"><a href="#team">CONTACT US</a></li>
                      <li id="menu-item-2147" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2147" role="menuitem"><a href="#portfolio">LOG IN</a></li>
                      <li className="nav-icon nav-divider"><a href="javascript:void(0)">|</a></li>        <li className="nav-icon cart-info">
                      </li><li id="menu-item-2148" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2148" role="menuitem"><a href="#services">JOIN</a></li>
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
          </div>
        ];
    }
}

export default Body;