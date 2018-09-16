import React,{ Component } from 'react';

class SearchLine extends Component{

    handleInputChange = (event) => {
        //const value = target.type === 'checkbox' ? target.checked : target.value;
        //console.log(event.target.value);
        this.props.onHandlerInputChange(event.target.value, 'search');
    }

    handleSwitchChange = (event) => {
        let value = event.target.checked;
        if (!value)
            value = +value;
        console.log(event.target.checked,event.target.value);
        this.props.onHandlerSwitchChange(value, 'switchHD');
    }

    render(){
      return (
          <div className="row">
              <div className="col-lg-8">
                  <div className="input input__search_white-background">
                      <div className="input__search-container">
                          <div className="input__search-magnifier"></div>
                          <input
                              onChange={this.handleInputChange}
                              type="search" className="js-channelfiltermodel-title input__search" placeholder="Найти канал" />
                          <input type="submit" className="input__search-submit" value="" />
                      </div>
                  </div>
              </div>
              <div className="col-lg-4">
                  <div className="input h-mr_50-desktop h-mt_7">
                      <input
                          onChange={this.handleSwitchChange}
                          type="checkbox"
                          id="1499327512441"
                          className="input__checkbox input__checkbox_switch js-show-hd"
                          value="0" />
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
      );
    };
}

export default SearchLine;