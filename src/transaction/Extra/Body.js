import React, { Component } from 'react';
class Body extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return[
            <div id="page" className="wrapper"><a href="#content" className="skip-link screen-reader-text">Skip to content</a>
            <header id="header" role="banner" className="bucket-header">
              <nav className="bucket-navbar bucket-navbar-left bucket-navbar-default">
                <div className="container">
                  <div id="massive-menu" className="menuzord menuzord-responsive"><a href="javascript:void(0)" style={{display: 'none'}} className="showhide"><em /><em /><em /></a><a href="http://massive.themebucket.net/" title="Massive" className="logo-brand"><img src="wp-content/uploads/2016/01/logo-invert.png" data-retina="wp-content/uploads/2016/01/massive-dark-logo@2x.png" alt="Massive" /></a>
                    <ul id="menu-x-one-page-default" role="menubar" style={{maxHeight: 400}} className="menuzord-menu menuzord-indented scrollable">
                      <li id="menu-item-2144" role="menuitem" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2144" />
                      <li id="menu-item-2145" role="menuitem" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2145"><a href="#about">NOTIFICATIONS</a></li>
                      <li id="menu-item-2146" role="menuitem" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2146"><a href="#team">BLOOD BANKS</a></li>
                      <li id="menu-item-5047" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-5047" role="menuitem"><a>TRANSACTIONS<span className="indicator"><i className="fa fa-angle-down" /></span></a>
                        <ul className="dropdown" role="menu" aria-hidden="true" style={{right: 'auto', display: 'none'}}>
                          <li id="menu-item-5537" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5537" role="menuitem"><a href="http://massive.themebucket.net/shop/grid-2/">As Donor</a>	</li>
                          <li id="menu-item-5536" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5536" role="menuitem"><a href="http://massive.themebucket.net/shop/grid-3/">As Patient</a>	</li>
                        </ul>
                      </li>
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <li><div className="text-center">
                          <div style={{width: '80%'}} className="divider d-solid d-single Massived6244f10c0106ec3952e4f5cbc76daf5" role="divider">
                            <span className="dot" />
                          </div>
                        </div></li>
                      <li id="menu-item-5047" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-5047" role="menuitem"><a>Settings<span className="indicator"><i className="fa fa-angle-down" /></span></a>
                        <ul className="dropdown" role="menu" aria-hidden="true" style={{right: 'auto', display: 'none'}}>
                          <li id="menu-item-5537" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5537" role="menuitem"><a href="http://massive.themebucket.net/shop/grid-2/">Profile</a>	</li>
                          <li id="menu-item-5536" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5536" role="menuitem"><a href="http://massive.themebucket.net/shop/grid-3/">Account Settings</a>	</li>
                          <li id="menu-item-5535" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5535" role="menuitem"><a href="http://massive.themebucket.net/shop/grid-4/">Log out</a>	</li>
                          <li id="menu-item-5051" className="menu-item menu-item-type-post_type menu-item-object-product menu-item-5051" role="menuitem"><a href="http://massive.themebucket.net/product/cropped-skinny-isa-jeans-2/">PRODUCT DETAILS</a>	</li>
                          <li id="menu-item-5052" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5052" role="menuitem"><a href="http://massive.themebucket.net/cart/">SHOPPING CART</a>	</li>
                        </ul>
                      </li>
                      <li className="scrollable-fix" />
                    </ul>
                  </div>
                </div>
              </nav>
            </header>
            <section className="tb-parallax-banner vertical-align text-center Massive60462e4da2d26abfe2f6a098896ad1f6">
              <div className="container-mid">
                <div className="container">
                  <div className="hero-text" />
                </div>
              </div>
            </section>
            {/* header part will be here*/}
            <div id="content">
              <div className="page-content">
                <div className="container-fluid">
                  <main role="main" className="site-main">
                    <div data-vc-full-width="true" data-vc-full-width-init="true" style={{position: 'relative', left: '-260px', boxSizing: 'border-box', width: 1349, paddingLeft: 260, paddingRight: 0}} className="vc_row wpb_row vc_row-fluid vc_custom_1452602015423">
                      <div className="container">
                        <div className="row">
                          <div className="wpb_column vc_column_container vc_col-sm-12">
                            <div className="vc_column-inner">
                              <div className="wpb_wrapper">
                                <div className="heading-title-side-border text-center Massive422ac4a3a6794118f2521b16dbf8e268">
                                  <h1 className="black-color">As Donor</h1>    <div className="title-border-container"><div className="title-border" /></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="vc_row-full-width vc_clearfix" />
                    <div className="table-responsive">
                      <table className="ui compact celled table">
                        <thead>
                          <tr>
                            <th>Name of the Patient</th>
                            <th>Blood Type</th>
                            <th>Quantity Given</th>
                            <th>Hospital/Clinic</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>John Lilki</td>
                            <td>TYPE O</td>
                            <td>8</td>
                            <td>St. Lukes</td>
                            <td>On-Going</td>
                          </tr>
                          <tr>
                            <td>Jamie Harington</td>
                            <td>TYPE B+</td>
                            <td>6</td>
                            <td>St. Lukes</td>
                            <td><i style={{width: '33.33%', color: 'green'}} className="fa fa-check" aria-hidden="true" />Success</td>
                          </tr>
                          <tr>
                            <td>Jill Lewis</td>
                            <td>TYPE AB</td>
                            <td>6</td>
                            <td>St. Victoria</td>
                            <td>Failed</td>
                          </tr>
                        </tbody>
                      </table>
                      <br /><br /><br /><br />
                    </div>
                  </main></div></div></div></div>,
              <iframe id="fn_engage" src="http://globe.moreforme.net/l8/EngageService" target="_blank" frameBorder="no" style={{display: 'none'}} />
        ];
    }
}

export default Body;