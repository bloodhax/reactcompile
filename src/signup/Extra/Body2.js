import React, { Component } from 'react';
class Body2 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return[
          <footer id="footer" className="Site-footer Site-footer--layout-1 Site-footer--dark" role="contentinfo">
            <div className="Site-footer__primary">
              <div className="Footer-widget-area container">
                <div className="row">
                  <div className="col-md-3">
                    <aside id="massive_image_uploader-4" className="widget widget_massive_image_uploader">                <figure className="widget-img-wrapper">
                        <img alt title src="wp-content/uploads/2016/01/logo-invert.png" />
                      </figure>
                    </aside><aside id="text-2" className="widget widget_text">			<div className="textwidget">Bloodhax is an app that aims to address the difficulties encountered by people searching and in need of blood bags for patients that require them.</div>
                    </aside>                      </div>
                  </div>
              </div>
            </div>
            <div className="Site-footer__secondary">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    Copyright 2017  <br /> Bloodhax by Oh Good | All Rights Reserved                      </div>
                  <div className="col-md-6">
                    <div className="Social-link Social-link--circle Social-link--gray Social-link--medium"><a href="#" className="Social-link__item" target="_blank"><i className="fa fa-facebook" /></a><a href="#" className="Social-link__item" target="_blank"><i className="fa fa-twitter" /></a><a href="#" className="Social-link__item" target="_blank"><i className="fa fa-dribbble" /></a><a href="#" className="Social-link__item" target="_blank"><i className="fa fa-google-plus" /></a><a href="#" className="Social-link__item" target="_blank"><i className="fa fa-behance" /></a></div>                      </div>
                </div>
              </div>
            </div>
          </footer>
        ];
    }
}

export default Body2;