import React, { Component } from 'react';
import Filter from '../presentational/Filter';
import ChannelList from '../presentational/ChannelList';
import '../../../css/App.css';

class App extends Component{
    render(){
        return (
            <div>
                <div className="row m-2">
                    <h3 className="col-lg-12">Телепередачи</h3>
                </div>
                <div className="row m-2">
                    <Filter />
                </div>
                <div className="row m-2">
                    <ChannelList />
                </div>
            </div>
        );
    }
}

export default App;