import React, { Component } from 'react';
import ProgrammList from './ProgramList';

class Channel extends Component{
    state = {
        isVisible: false
    };


    handleVisibleFullList = () => {
        this.setState({ isVisible: !this.state.isVisible});
    }


    render() {
        return (
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 ">
                <div className={"tv-program-tile js-tv-program-tile p-2 " + (this.state.isVisible ? "state-opened" : "")} >
                    <div className="tv-program-tile__inner-wrap js-tv-program-tile__inner-wrap">
                        <div className="tv-program-tile__header js-tv-program-tile__header">
                            <div className="tv-program-tile__header-image">
                                <img src="//epg.domru.ru/chlogo/1474886439.png"/>
                            </div>
                            <div onClick={ this.handleVisibleFullList }
                                className="tv-program-tile__header-title js-tv-program-tile__header-title">
                                <a
                                className="tv-program-tile__header-title-name" href="#">
                                    {this.props.channel.name}
                                </a>
                                <div className="tv-program-tile__header-title-show-name">Восьмое чувство [16+]</div>
                                <div className="tv-program-tile__header-title-show-time">13:00 - 14:00</div>
                            </div>
                        </div>
                         <ProgrammList programms={this.props.programms}/>
                        <div onClick={ this.handleVisibleFullList }
                            className="tv-program-tile__link-drop tv-program-tile__link-drop_close js-tv-program-tile__link-drop"
                            data-action="close">Свернуть
                        </div>
                    </div>
                    <div className="tv-program-tile__link-drop-wrap">
                        <div onClick={ this.handleVisibleFullList }
                             className="tv-program-tile__link-drop js-tv-program-tile__link-drop"
                             data-action="open">Развернуть
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Channel;