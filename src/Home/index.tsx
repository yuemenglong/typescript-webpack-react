import * as React from 'react';

interface Props {
    location: Location,
}

interface State {
    name: string,
}

export class Home extends React.Component<Props, State> {

    state = {name: this.props.location.pathname};

    render() {
        return (
            <div>
                This Is {this.state.name}'s Home
            </div>
        );
    }
}


