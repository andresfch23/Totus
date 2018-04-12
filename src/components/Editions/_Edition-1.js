import React, { Component } from 'react';
import File from '../../confesion.pdf';

class Edition1 extends Component {
    render() {
        return(
            <div className="edition__pdf">
                <embed src={File} width="800px" height="2100px" />
            </div>
        );
    }
}

export default Edition1;