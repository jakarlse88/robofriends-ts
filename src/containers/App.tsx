import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ACTIONS from '../actions/actions';
import * as React from 'react';
import MainPage from '../components/mainpage/MainPage';

interface Robots {
    id: number,
    name: string,
    username: string,
    email: string
};

interface AppProps {
	query: string,
	robots: Array<Robots>,
	actions: any
};

class App extends React.Component<AppProps> {
	constructor(props: any) {
		super(props);

		props.actions.fetchData('https://jsonplaceholder.typicode.com/users');
	}

	render() {
		return <MainPage 
			query={this.props.query}
			robots={this.props.robots}
			actions={this.props.actions} />;
	}
}

const mapStateToProps = (state: any) => {
	return {
		query: state.query,
		robots: state.robots
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		actions: bindActionCreators(ACTIONS, dispatch)
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);