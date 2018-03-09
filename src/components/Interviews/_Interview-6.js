import React, { Component } from 'react';
import Advertisement from '../Advertisement.js';

class Interview5 extends Component {
    render() {
        return(
            <div className="grid">
                <div className="grid__item three-quarters">
                    <div><h2 className="interview__main-title interview__main-title--third">Celinés Díaz Misionera Católica a tiempo completo</h2></div>
                </div>
                <div className="interview-two__profile"> 
                </div>
                <div className="grid__item one-quarter">
                    <Advertisement />
                </div>
            </div>
        )
    }
}

export default Interview5;