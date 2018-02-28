import React                                     from 'react';
import ReactDOM                              from 'react-dom';
import { Router }              from 'react-router-dom'; //react router stuff
import { Provider }                        from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers              from './js/reducers/reducers.js';
import thunk                               from 'redux-thunk';
import registerServiceWorker   from './registerServiceWorker';
import createBrowserHistory from 'history/createBrowserHistory';
import './css/index.css';
import App                                       from './App';
import { loadState, saveState } from './localStorage.js';

const history = createBrowserHistory();
const persistedState = loadState();

const store = createStore(
	reducers,
	persistedState,
	compose(
	applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	) 
 );

store.subscribe(() => {
	saveState(store.getState());
}) //persists user after page refresh

ReactDOM.render((
	<Provider store={store}>
		<Router history={history}>
			<App />
		</Router>
	</Provider>
	), 
document.getElementById('root'));
registerServiceWorker();
