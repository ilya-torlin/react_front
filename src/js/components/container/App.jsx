import React, { Component } from 'react';
import axios from 'axios';
import Filter from '../presentational/Filter';
import ChannelList from '../presentational/ChannelList';
import '../../../css/App.css';

class App extends Component{
    API_URL = 'http://localhost';

    state = {
        programmList: [],
        channelList: [],
        genreList:[],
        categoryList:[],
        packageList:[],
        filter: {
            search: '',
            date:'',
            package: 0,
            genre: 0,
            category: 0,
            switchHD: 0
        },
    };

    constructor(props) {
        super(props);

        this.initChannelsProgramms(this.state.filter);
        this.initGenres();
        this.initCategories();
        this.initPackages();
    }

    initChannelsProgramms(payload){
        axios.get( this.API_URL + '/channelprogramm', {
            params: {
                ...payload
            },
            }).then(resp => {
                const error = resp.data.error;
                if(error){
                    let errorTxt = resp.data.data.msgClient;
                    console.log(`Ошибка при поиске пользователя по запросу '${this.findUserStr}'; ${errorTxt}`);
                }else {
                    //console.log(resp.data.data);
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

    initGenres(){
        let payload = {};
        axios.get( this.API_URL + '/genre', {
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
                        genreList: resp.data.data
                    });
                }
            })
            .catch(err => {
                console.log(err);
            });

    }

    initCategories(){
        let payload = {};
        axios.get( this.API_URL + '/channelcategory', {
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
                        categoryList: resp.data.data
                    });
                }
            })
            .catch(err => {
                console.log(err);
            });

    }

    initPackages(){
        let payload = {};
        axios.get( this.API_URL + '/channelpackage', {
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
                        packageList: resp.data.data
                    });
                }
            })
            .catch(err => {
                console.log(err);
            });

    }

    Filterhandler = (filter) => {
        this.initChannelsProgramms(filter);
    }

    render(){
        return (
            <div>
                <div className="row m-2">
                    <h3 className="col-12">Телепередачи</h3>
                </div>
                <div className="row m-2">
                    <Filter
                        genres={this.state.genreList}
                        packages={this.state.packageList}
                        categories={this.state.categoryList}
                        onFilterHandler={this.Filterhandler}
                    />
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