import React, { Component } from 'react';
import '../../../css/Filter.css';

class Filter extends Component{
    render() {
        return (
            <React.Fragment>
                <div className="col-lg-12">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="input input__search_white-background">
                                <div className="input__search-container">
                                    <div className="input__search-magnifier"></div>
                                    <input type="search" className="js-channelfiltermodel-title input__search" placeholder="Найти канал" />
                                        <input type="submit" className="input__search-submit" value="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="input h-mr_50-desktop h-mt_7">
                                <input type="checkbox" id="1499327512441" className="input__checkbox input__checkbox_switch js-show-hd" value="0" />
                                    <label className="input__label h-display_block-mobile input__label_right" htmlFor="1499327512441">
                                        <span className="input__label-text">
                                            <div className="h-display_flex h-color_white h-flex-align-center h-mt_-3">
                                                <span className="icon icon_tv_service-hd h-mr_5 h-fz_28-no-decrease"></span>
                                                <span className="h-color_white">Только HD</span>
                                            </div>
                                        </span>
                                    </label>
                            </div>
                        </div>
                    </div>
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