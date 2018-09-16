import React, { Component } from 'react';
import '../../../css/Filter.css';
import SeachLine from './SearchLine';
import SelectLine from './SelectLine';


class Filter extends Component{
    state ={
      filter: {
          search: '',
          package: 0,
          genre: 0,
          category: 0,
          switchHD: false
      },
    };

    SelectHandler = (value, key) => {
        const filter = {...this.state.filter};
        filter[key] = value.id;
        this.setState({ filter });
    }

    InputHandler = (value, key) => {
        const filter = {...this.state.filter};
        filter[key] = value;
        this.setState({ filter });
    }

    render() {
        return (
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
                        onSelectPackageHandler={this.SelectHandler}
                        onSelectCategoryHandler={this.SelectHandler}
                        onSelectGenreHandler={this.SelectHandler}
                    />
                </div>
                <div className="col-lg-12">
                    <div className="tabs js-tabs h-align_left" id="js-program-dates" data-domain="perm"
                         data-utc-offset="18000">
                        <div className="tabs__header tabs__header_justify">
                            <div data-tab="sunday"
                                 className="tabs__header-item js-tabs-header h-fz_20 h-mr_0-desktop tabs__header-item_grey h-display_none-mobile">
                                <div className="tabs__header-elem"><span
                                    className="tabs__header-elem-title js-date-title"
                                    data-date="2018-09-07">07, пт</span></div>
                            </div>
                            <div data-tab="monday"
                                 className="tabs__header-item js-tabs-header h-fz_20 h-mr_0-desktop tabs__header-item_grey h-display_none-mobile">
                                <div className="tabs__header-elem"><span
                                    className="tabs__header-elem-title js-date-title"
                                    data-date="2018-09-08">08, сб</span></div>
                            </div>
                            <div data-tab="tuesday"
                                 className="tabs__header-item js-tabs-header h-fz_20 h-mr_0-desktop tabs__header-item_grey">
                                <div className="tabs__header-elem"><span
                                    className="tabs__header-elem-title js-date-title"
                                    data-date="2018-09-09">09, вс</span></div>
                            </div>
                            <div data-tab="wednesday"
                                 className="tabs__header-item js-tabs-header h-fz_20 h-mr_0-desktop js-tabs__header-item_active tabs__header-item_active">
                                <div className="tabs__header-elem"><span
                                    className="tabs__header-elem-title js-date-title" data-date="now">Сегодня</span>
                                </div>
                            </div>
                            <div data-tab="thursday"
                                 className="tabs__header-item js-tabs-header h-fz_20 h-mr_0-desktop">
                                <div className="tabs__header-elem"><span
                                    className="tabs__header-elem-title js-date-title"
                                    data-date="2018-09-11">11, вт</span></div>
                            </div>
                            <div data-tab="Friday"
                                 className="tabs__header-item js-tabs-header h-fz_20 h-mr_0-desktop h-display_none-mobile">
                                <div className="tabs__header-elem"><span
                                    className="tabs__header-elem-title js-date-title"
                                    data-date="2018-09-12">12, ср</span></div>
                            </div>
                            <div data-tab="Saturday"
                                 className="tabs__header-item js-tabs-header h-fz_20 h-mr_0-desktop h-display_none-mobile">
                                <div className="tabs__header-elem"><span
                                    className="tabs__header-elem-title js-date-title"
                                    data-date="2018-09-13">13, чт</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Filter;