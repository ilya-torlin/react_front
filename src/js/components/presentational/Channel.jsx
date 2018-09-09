import React, { Component } from 'react';
import ProgrammList from './ProgramList';

class Channel extends Component{
    render() {
        return (
            <div className="col-md-4 col-sm-6 col-xs-12">
                <ProgrammList />
            </div>
        );
    }
}

export default Channel;