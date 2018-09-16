import React, { Component } from 'react';

class DateItem extends Component{
    onClickInputHandler = () =>{
        this.props.onClickHandle(this.props.date, 'date');
    }

    render(){
        return (
            <div onClick={this.onClickInputHandler}
                 className={"tabs__header-item js-tabs-header h-fz_20 h-mr_0-desktop tabs__header-item_grey h-display_none-mobile" + (this.props.date.active ? "js-tabs__header-item_active tabs__header-item_active" : "")}>
                <div className="tabs__header-elem">
                    <span className="tabs__header-elem-title js-date-title" >
                        {this.props.date.name}
                    </span>
                </div>
            </div>
        );
    }
}

export default DateItem;