import React, { Component } from 'react';
import Body from './Extra/Body'

class Transaction extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return[
            <Body key='1'/>
        ];
    }
}

export default Transaction;