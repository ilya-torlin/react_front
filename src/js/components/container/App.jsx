import React, { Component } from 'react';
import axios from 'axios';
import Filter from '../presentational/Filter';
import ChannelList from '../presentational/ChannelList';
import '../../../css/App.css';

class App extends Component{
    constructor(props) {
        super(props);

        this.state = {
            programmList: [],
            channelList: [],
        };

        this.initChannelsProgramms();
        this.initChannels();
    }

    initChannels(){

    }

    initChannelsProgramms(){
        const API_URL = 'http://localhost'
        let payload = {};
        console.log(API_URL);
        axios.get( API_URL + '/channelprogramm', {
            params: {
                ...payload
            },
            }).then(resp => {
                const error = resp.data.error;
                if(error){
                    let errorTxt = resp.data.data.msgClient;
                    console.log(`Ошибка при поиске пользователя по запросу '${this.findUserStr}'; ${errorTxt}`);
                }else {
                    this.setState({
                        channelList: resp.data.data.channels
                    });
                    this.setState({
                        programmList: this.modificateProgrammList(resp.data.data.programms)
                    });
                }
            })
            .catch(err => {
                console.log(err);
            });
    }

    modificateProgrammList(programmList){
        let resultArray = [];
        for (let channel of this.state.channelList){
            let items = programmList.filter( programm => programm.channel_id === channel.id );
            if(items.length) {
                resultArray.push(Object.assign({}, {
                    programms: items,
                    channel: channel
                }));
            }
        }
        return resultArray;
    }

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
                    <ChannelList
                        channels={this.state.programmList}
                    />
                </div>
            </div>
        );
    }
}

export default App;