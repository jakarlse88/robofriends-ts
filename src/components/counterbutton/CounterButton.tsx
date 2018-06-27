import * as React from 'react';

interface CounterButtonProps {
    color?: string
};

interface CounterButtonState {
    count: number
};

export default class CounterButton extends React.Component<CounterButtonProps, CounterButtonState> {
    constructor(props: any) {
        super(props);

        this.state = {
            count: 0
        };
    };

    shouldComponentUpdate(nextProps:any, nextState:any): boolean {
        if (this.state.count !== nextState.count) return true; 
        return false;
    };

    updateCount = () => {
        this.setState(prevState => {
            return { count: prevState.count + 1 }
        });
    };

    render() {
        return (
            <button
                id='counter'
                color={this.props.color}
                onClick={this.updateCount} >
                Count: {this.state.count}
            </button>
        )
    };
};