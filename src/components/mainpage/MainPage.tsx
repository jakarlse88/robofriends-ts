import './MainPage.css';
import CardList from '../cardlist/CardList';
import ErrorBoundary from '../errorboundary/ErrorBoundary';
import Header from '../header/Header';
import * as React from 'react';
import Scroll from '../scroll/Scroll';
import SearchBox from '../searchbox/SearchBox';

interface Robots {
    id: number,
    name: string,
    username: string,
    email: string
};

interface MainPageProps {
    query: string,
    robots: Array<Robots>,
    actions?: any,
    children?: any
};

export default class MainPage extends React.Component<MainPageProps> {
    constructor(props: any) {
        super(props);
    }
    
    filterRobots = (robots: Array<Robots>) => {
        const { query } = this.props;
        const filteredRobots: Array<Robots> = robots.length ?
            robots.filter(robot => {
                return robot.name.toLowerCase().includes(query.toLowerCase());
            })
            : [];
        return filteredRobots;
    }

    render() {
        const {
            actions,
            robots,
        } = this.props;

        return !robots.length ?
            <h1>Loading</h1>
            : (
                <div className='tc'>
                    <Header />
                    <SearchBox
                        searchChange={(e: any) => actions.setQuery(e.target.value)} />
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={this.filterRobots(robots)} />
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
    }
}