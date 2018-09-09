import React, { Component } from 'react';
import Channel from './Channel';

class ChannelList extends Component{
    render() {
        return (
            <React.Fragment>
                <Channel />
                <Channel />
                <Channel />
                <Channel />
                <Channel />
                <Channel />
                <Channel />
            </React.Fragment>
        );
    }
}

export default ChannelList;