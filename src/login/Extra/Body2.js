import React, { Component } from 'react';
class Body2 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return[
            <div>
            {/* .post-grid */}
            <div className="vc_row-full-width vc_clearfix" /><div className="vc_row-full-width vc_clearfix" />
            {/* #content */}
            <div style={{minHeight: 500, background: '#f5f5f5'}}>
              <br />
              <br />
              <br />
              <br />
              <center>
                <div style={{minHeight: 50, width: '33.33%', background: '#fff', WebkitBoxShadow: '-1px 1px 13px black', zIndex: 99, borderRadius: 10}}>
                  <br />
                  <br />
                  <p style={{color: 'indianred', fontWeight: 'bold', margin: 'auto'}}> E-mail: </p>
                  <input id="Massivee3f18aba48576bb1fa4cbc33f0a3e769-id" type="email" className="form-control" style={{width: '55%'}} placeholder="juandelacruz@gmail.com" name="Email" />
                  <p style={{color: 'indianred', fontWeight: 'bold', margin: 'auto'}}> Password: </p>
                  <input id="Massivee3f18aba48576bb1fa4cbc33f0a3e769-id" type="password" className="form-control" style={{width: '55%'}} placeholder="Enter your Password" name="Lastname" />
                  <br />
                  <br />
                  <a className="btn btn-dark-solid btn-medium " type="submit" target="_blank">Log in</a>
                  <br />
                  <br />
                  <br />
                </div>
              </center>
            </div>
          </div>
        ];
    }
}

export default Body2;