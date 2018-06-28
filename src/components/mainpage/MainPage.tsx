import './MainPage.css';

import CardList from '../cardlist/CardList';
import ErrorBoundary from '../errorboundary/ErrorBoundary';
import Header from '../header/Header';

import * as React from 'react';
import Scroll from '../scroll/Scroll';
import SearchBox from '../searchbox/SearchBox';

export interface IRobots {
    id: number,
    name: string,
    username: string,
    email: string
};

interface IMainPageProps {
    query: string,
    robots: IRobots[],
    actions?: any,
    children?: any
};

export default class MainPage extends React.Component<IMainPageProps> {
    constructor(props: any) {
        super(props);
    }

    public filterRobots(robots: IRobots[]): IRobots[] {
        const { query } = this.props;
        const filteredRobots: IRobots[] = robots.length ?
            robots.filter(robot => {
                return robot.name.toLowerCase().includes(query.toLowerCase());
            })
            : [];
        return filteredRobots;
    }

    public onSearchChange = (event: React.SyntheticEvent<HTMLInputElement>): void => {
        this.props.actions.setQuery(event.currentTarget.value);
    }

    public render(): JSX.Element {
        const {
            robots,
        } = this.props;

        return !robots.length ?
            <h1>Loading</h1>
            : (
                <div className='tc'>
                    <Header />
                    <SearchBox
                        searchChange={(e: any) => this.onSearchChange(e)} />
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={this.filterRobots(robots)} />
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
    }
}