import React, { Component } from 'react';
import Channel from './Channel';

class ChannelList extends Component{
    constructor(props) {
        super(props);

        this.state = {};

    }
    render() {
        console.log(this.props);
        return (
            <React.Fragment>
                {this.props.channels.map( channel => <Channel key={channel.channel.id} channel={channel.channel} programms={channel.programms} />)}
            </React.Fragment>
        );
    }
}

export default ChannelList;