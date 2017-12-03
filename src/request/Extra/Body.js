import React, { Component } from 'react';
class Body extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return[
            <div>
            <div id="page" className="wrapper"><a href="#content" className="skip-link screen-reader-text">Skip to content</a>
              <div id="tb-preloader">
                <div className="tb-preloader-wave" />
              </div>
              <header id="header" role="banner" className="bucket-header bucket-header-overflow has-bucket-navbar-expand">
                <nav className="bucket-navbar bucket-navbar-top bucket-navbar-sticky bucket-navbar-expand bucket-navbar-transparent bucket-navbar-transparent-light">
                  <div className="container">
                    <div id="massive-menu" className="menuzord"><a href="http://massive.themebucket.net/" title="Massive" className="logo-brand"><img src="wp-content/uploads/2016/01/massive-logo-dark.png" data-retina="wp-content/uploads/2016/01/massive-dark-logo@2x.png" alt="Massive" /></a>
                      <ul id="menu-x-one-page-default" role="menubar" className="menuzord-menu menuzord-right bucket-nav-standard">
                        <li id="menu-item-2144" role="menuitem" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2144"><a href="#">HOME</a></li>
                        <li id="menu-item-2145" role="menuitem" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2145"><a href="#aboutus">NOTIFICATION</a></li>
                        <li id="menu-item-2146" role="menuitem" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2146"><a href="#team">BLOOD BANKS</a></li>
                        <li id="menu-item-2147" role="menuitem" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2147"><a href="#portfolio">TRANSACTIONS</a></li>
                        <li className="nav-icon nav-divider"><a href="javascript:void(0)">|</a></li>
                        <li className="nav-icon cart-info" />
                        <li id="menu-item-5047" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-5047" role="menuitem"><a>SETTINGS<span className="indicator"><i className="fa fa-angle-down" /></span></a>
                          <ul className="dropdown" role="menu" aria-hidden="true" style={{right: 'auto', display: 'none'}}>
                            <li id="menu-item-5537" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5537" role="menuitem"><a href="http://massive.themebucket.net/shop/grid-2/">Profile</a>	</li>
                            <li id="menu-item-5536" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5536" role="menuitem"><a href="http://massive.themebucket.net/shop/grid-3/">Account Settings</a>	</li>
                            <li id="menu-item-5535" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5535" role="menuitem"><a href="http://massive.themebucket.net/shop/grid-4/">Log out</a>	</li>
                          </ul>
                        </li>
                        <div className="megamenu megamenu-quarter-width">
                          <div className="megamenu-row">
                            <div className="col12">
                              <ul className="massive-minicart cart_list product_list_widget">
                                <li className="empty">No products in the cart.</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <li className="nav-icon">
                          <div className="megamenu megamenu-quarter-width search-box">
                            <form role="search" method="get" action="http://massive.themebucket.net/" autoComplete="off">
                              <label htmlFor="nav-search-form" className="sr-only">Search for:</label>
                              <input id="nav-search-form" type="text" name="s" placeholder="Search Here..." className="form-control" />
                            </form>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </header>
            </div>
            {/* .post-grid*/}
            <div className="vc_row-full-width vc_clearfix" />
            <div className="vc_row-full-width vc_clearfix" />
            {/* #content*/}
            <div style={{minHeight: 500, background: '#f5f5f5'}}><br /><br /><br /><br />
              <div style={{position: 'relative', left: '28%', minHeight: 50, width: '40.33%', background: '#fff', WebkitBoxShadow: '-1px 1px 13px black', zIndex: 99, borderRadius: 10}}>
                <center><br /><br />
                  <form method="POST">
                    <div className="heading-title-alt border text-center Massive158bbce44871d3a3c8b4f113b7ab70b2">
                      <h3 className="ctitle-border black-color">FIND BLOOD DONOR NEARBY</h3><span className="cst-color">All fields are required.</span>
                    </div>
                    <p style={{color: 'indianred', fontWeight: 'bold', margin: 'auto'}}> Quantity(Per bag): </p>
                    <input id="Massivee3f18aba48576bb1fa4cbc33f0a3e769-id" type="Number" style={{width: '55%'}} name="amount" className="form-control" />
                    <p style={{color: 'indianred', fontWeight: 'bold', margin: 'auto'}}> Blood Type: {this.props.user.blood_type} </p>
                    <br /><br /><button type="submit" className="btn btn-dark-solid btn-medium">Request</button><br /><br /><br />
                  </form>
                </center>
              </div>
              <br /><br /><br />
            </div>
          </div>
        ];
    }
}

export default Body;