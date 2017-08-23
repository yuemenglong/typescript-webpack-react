import * as React from "react"

function AboutClass() {
    this.render = function () {
        return <h1>About</h1>
    }
}

let About = React.createClass(new AboutClass());

export = About

