import * as React from 'react';

interface ICounterButtonProps {
    color?: string
};

interface ICounterButtonState {
    count: number
};

export default class CounterButton extends React.Component<ICounterButtonProps, ICounterButtonState> {
    constructor(props: any) {
        super(props);

        this.state = {
            count: 0
        };
    };

    public shouldComponentUpdate(nextProps:any, nextState:any): boolean {
        if (this.state.count !== nextState.count) { 
            return true; 
        } 
        return false;
    };

    public updateCount = () => {
        this.setState(prevState => {
            return { count: prevState.count + 1 }
        });
    };

    public render() {
        return (
            <button
                color={this.props.color}
                id='counter'
                onClick={this.updateCount} >
                Count: {this.state.count}
            </button>
        )
    };
};