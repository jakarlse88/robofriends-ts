import * as React from 'react';
import CounterButton from '../counterbutton/CounterButton';

export default class Header extends React.Component {
    shouldComponentUpdate(nextProps: any, nextState: any): boolean {
        return false;
    }

    render() {
        return (
            <React.Fragment>
                <h1 className='f1'>RoboFriends</h1>
                <CounterButton color={'red'} />
            </React.Fragment>
        )
    }
}