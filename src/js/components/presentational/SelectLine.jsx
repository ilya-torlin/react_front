import React, { Component } from 'react';
import Select from 'react-select';

class SelectLine extends Component{

    handlePackageChange = (newValue, {action}) => {
        if (action === "clear")
            newValue =  { id: 0 };
        this.props.onSelectHandler(newValue, 'package');
    };

    handleCategoryChange = (newValue, {action}) => {
        if (action === "clear")
            newValue =  { id: 0 };
        this.props.onSelectHandler(newValue, 'category');
    };

    handleGenreChange = (newValue, {action}) => {
        if (action === "clear")
            newValue =  { id: 0 };
        this.props.onSelectHandler(newValue, 'genre');
    };

    render(){
        return(
            <div className="row">
                <div className="col-12 col-sm-12 col-md-4 col-lg-4 mb-3">
                    <Select
                        placeholder={"Пакеты каналов"}
                        options={this.props.packages}
                        isClearable
                        getOptionLabel={(option) => (`${option.name}`)}
                        getOptionValue={(option) => (option['id'])}
                        onChange={this.handlePackageChange}
                    />
                </div>
                <div className="col-12 col-sm-12 col-md-4 col-lg-4 mb-3">
                    <Select
                        placeholder={"Категории каналов"}
                        options={this.props.categories}
                        isClearable
                        getOptionLabel={(option) => (`${option.name}`)}
                        getOptionValue={(option) => (option['id'])}
                        onChange={this.handleCategoryChange}
                    />
                </div>
                <div className="col-12 col-sm-12 col-md-4 col-lg-4 mb-3">
                    <Select
                        placeholder={"Жанры передач"}
                        options={this.props.genres}
                        isClearable
                        getOptionLabel={(option) => (`${option.name}`)}
                        getOptionValue={(option) => (option['id'])}
                        onChange={this.handleGenreChange}
                    />
                </div>
            </div>
        );
    }
}

export default SelectLine;