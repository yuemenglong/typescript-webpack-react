import * as React from 'react';

interface Props {
    name: string,
    times: number,
}

export class Home extends React.Component<Props, Object> {
    render() {
        return (
            <div>
                This Is {this.props.name}'s Home
            </div>
        );
    }
}


