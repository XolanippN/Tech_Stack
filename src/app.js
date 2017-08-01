import React,{Component} from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './Reducers';
import {Header} from './Components/Common';
import LibraryList from './Components/LibraryList' // we hane to import the library list from the current state in the application


//provider only can have one child so we rap its content in a single view
const App = () => {
    return (
        <Provider store = {createStore(reducers)}>
        <View style={{ flex: 1 }} >
            <Header headerText='Teck Stack' />
            <LibraryList />
        </View>
        </Provider>
    );
};

export default App;