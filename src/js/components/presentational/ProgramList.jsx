import React, { Component } from 'react';
import '../../../css/ProgrammList.css';
import Programm from './Programm';
import Channel from "./Channel";

class ProgrammList extends Component{
    render() {
        return (
            // state-opened - class for open
            <div className="tv-program-tile__list js-tv-program-tile__list">
                { (this.props.programms)
                    ? this.props.programms.map( programm => <Programm key={programm.id} programm={programm} />)
                    : <h3>Нет расписания для текущей выборки</h3>
                }
            </div>
        );
    }
}

export default ProgrammList;