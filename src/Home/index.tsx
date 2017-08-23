import * as React from "react"

function HomeClass() {
    this.render = function () {
        return <h1>Home</h1>
    }
}

let Home = React.createClass(new HomeClass());

export = Home

