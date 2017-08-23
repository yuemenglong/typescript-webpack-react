/**
 * Created by Administrator on 2017/8/22.
 */
import React = require("react");
import ReactDOM = require("react-dom");
import {Router, Route, browserHistory, IndexRoute, Link} from "react-router"
import About = require("./About/index");
import Home = require("./Home/index");

function AppClass() {
    this.getInitialState = function () {
        return {}
    };

    this.render = function () {
        return <div>
            <Link to="/">home</Link>
            <Link to="/about">about</Link>
            {this.props.children}
        </div>
    }
}

let App = React.createClass(new AppClass());

let router = <Router history={browserHistory}>
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/about" component={About}/>
    </Route>
</Router>;

ReactDOM.render(router, document.getElementById("container"));
