import * as React from 'react';
import CounterButton from '../counterbutton/CounterButton';

export default class Header extends React.Component {
    public shouldComponentUpdate(nextProps: any, nextState: any): boolean {
        return false;
    }

    public render(): JSX.Element {
        return (
            <React.Fragment>
                <h1 className='f1'>RoboFriends</h1>
                <CounterButton color={'red'} />
            </React.Fragment>
        )
    }
}