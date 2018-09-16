import React, { Component } from 'react';


class Programm extends Component{
    render() {
        return (
            <dl className="tv-program-tile__list-item js-tv-program-tile__list-item">
                <dt className="tv-program-tile__list-item-time">{this.props.programm.time}</dt>
                <dd className="tv-program-tile__list-item-title">{this.props.programm.name}</dd>
            </dl>
        );
    }
}

export default Programm;