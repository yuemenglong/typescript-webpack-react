/**
 * Created by Administrator on 2017/8/22.
 */
import * as React from "react"
import * as ReactDOM from "react-dom"
import {browserHistory, Router, Route, IndexRoute, Link} from 'react-router'
import {Home} from "./Home/index";
import {About} from "./About/index";
import "./style.less";
import {App} from "./app";

let router = <Router history={browserHistory}>
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/about" component={About}/>
    </Route>
</Router>;

ReactDOM.render(router, document.getElementById("container"));
