import React, { Component } from 'react';
import Body from './Extra/Body'
import Body2 from './Extra/Body2'
import Body3 from './Extra/Body3'
class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return[
            <Body key='1'/>,
            <Body2 key='2'/>,
            <Body3 key='3'/>
        ];
    }
}

export default Login;