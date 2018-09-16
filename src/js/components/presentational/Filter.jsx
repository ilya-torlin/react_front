import React, { Component } from 'react';
import '../../../css/Filter.css';
import SeachLine from './SearchLine';
import SelectLine from './SelectLine';
import DateItem from "./DateItem";


class Filter extends Component{
    state ={
      filter: {
          search: '',
          date: '',
          package: 0,
          genre: 0,
          category: 0,
          switchHD: true
      },
      dates: [
          { id:0, name: '01, пт', action: 'date', value: '2018-09-01', active: false},
          { id:1, name: '02, cб', action: 'date', value: '2018-09-02', active: false},
          { id:2, name: 'сейчас', action: 'now', value: '', active: false},
          { id:3, name: 'сегодня', action: 'date', value: '2018-09-03', active: true},
          { id:4, name: '04, пн', action: 'date', value: '2018-09-04', active: false},
      ]
    };


    SelectHandler = (value, key) => {
        const filter = {...this.state.filter};
        filter[key] = value.id;
        let setStateSelect = new Promise((resolve) => {
            this.setState({ filter });
            resolve();
        })
        setStateSelect.then(() =>{
            this.props.onFilterHandler(this.state.filter);
        })
    }

    InputHandler = (value, key) => {
        const filter = {...this.state.filter};
        filter[key] = value;
        let setStateSelect = new Promise((resolve) => {
            this.setState({ filter });
            resolve();
        })
        setStateSelect.then(() =>{
            this.props.onFilterHandler(this.state.filter);
        })
    }

    ClickDateHandler = (date, key) => {
        const filter = {...this.state.filter};
        filter[key] = date.value;

        let dates = [...this.state.dates];
        dates.map( item => item.active = false );
        dates[date.id].active = true;

        let setStateSelect = new Promise((resolve) => {
            this.setState({ filter });
            this.setState({ dates });
            resolve();
        })
        setStateSelect.then(() =>{

            this.props.onFilterHandler(this.state.filter);
        })
    }

    render() {
        let dateClasses = "tabs__header-item js-tabs-header h-fz_20 h-mr_0-desktop";
        return(
            <React.Fragment>
                <div className="col-lg-12">
                    <SeachLine
                        onHandlerInputChange={this.InputHandler}
                        onHandlerSwitchChange={this.InputHandler}
                    />
                </div>
                <div className={"col-lg-12"}>
                    <SelectLine
                        genres={this.props.genres}
                        packages={this.props.packages}
                        categories={this.props.categories}
                        onSelectHandler={this.SelectHandler}
                    />
                </div>
                <div className="col-lg-12">
                    <div className="tabs js-tabs h-align_left" id="js-program-dates" data-domain="perm"
                         data-utc-offset="18000">
                        <div className="tabs__header tabs__header_justify">
                            {this.state.dates.map( item => <DateItem
                                                                key={item.id}
                                                                date={item}
                                                                onClickHandle={this.ClickDateHandler}
                                                            />)}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Filter;