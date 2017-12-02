import React, { Component } from 'react';
import Body from './Extra/Body'
import Body2 from './Extra/Body2'

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return[
            <Body key='1'/>,
            <Body2 key='2'/>
        ];
    }
}

export default App;