import 'bootstrap/dist/css/bootstrap.min.css'

import App from './js/components/container/App';
import ReactDOM from "react-dom";
import React from "react";

const wrapper = document.getElementById("app-container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;