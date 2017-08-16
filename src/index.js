import React from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux';
import store from './store/store';
import { getCountries} from './actions/actions-countries';
import DevTools from './DevTools';

render(
    <Provider store={store}>
        <h1>Inicjalizacja projektu</h1>
        <DevTools />
    </Provider>,
    document.getElementById('root')
);


store.dispatch(getCountries());
console.log(store.getState());