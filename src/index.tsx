import './index.css';
import 'tachyons';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { searchRobots } from './reducers/reducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './containers/App';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

if (process.env.NODE_ENV !== 'production') {
    const { whyDidYouUpdate } = require('why-did-you-update');
    whyDidYouUpdate(React);
}

// const store = createStore(searchRobots, composeWithDevTools(applyMiddleware(thunk)));

const store = createStore(searchRobots, /* preloadedState, */ composeWithDevTools(
  applyMiddleware(thunk),
  // other store enhancers if any
));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();