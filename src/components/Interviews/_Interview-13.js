import React, { Component } from 'react';
import Advertisement from '../Advertisement.js';

class Interview13 extends Component {
    render() {
        return(
            <div className="grid">
                <div className="grid__item three-quarters">
                </div> 
                <div className="grid__item one-quarter">
                    <Advertisement />
                </div>
            </div>
        )
    }
}

export default Interview13;