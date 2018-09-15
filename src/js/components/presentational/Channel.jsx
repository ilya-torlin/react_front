import React, { Component } from 'react';
import ProgrammList from './ProgramList';

class Channel extends Component{
    render() {
        return (
            <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="tv-program-tile js-tv-program-tile p-2">
                    <div className="tv-program-tile__inner-wrap js-tv-program-tile__inner-wrap">
                        <div className="tv-program-tile__header js-tv-program-tile__header">
                            <div className="tv-program-tile__header-image">
                                <img src="//epg.domru.ru/chlogo/1474886439.png"/>
                            </div>
                            <div className="tv-program-tile__header-title js-tv-program-tile__header-title"><a
                                className="tv-program-tile__header-title-name" href="#">{this.props.channel.name}</a>
                                <div className="tv-program-tile__header-title-show-name">Восьмое чувство [16+]</div>
                                <div className="tv-program-tile__header-title-show-time">13:00 - 14:00</div>
                            </div>
                        </div>
                         <ProgrammList programms={this.props.programms}/>
                        <div
                            className="tv-program-tile__link-drop tv-program-tile__link-drop_close js-tv-program-tile__link-drop"
                            data-action="close">Свернуть
                        </div>
                    </div>
                    <div className="tv-program-tile__link-drop-wrap">
                        <div className="tv-program-tile__link-drop js-tv-program-tile__link-drop"
                             data-action="open">Развернуть
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Channel;