import {useState} from 'react';
import React from 'react';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Search from './components/Search';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const items = [
    {
        title: 'What is React?',
        content: 'React is a front-end Javascript framework'
    },
    {
        title: 'Why use React',
        content: 'React is a favorite JS library among engineers'
    },
    {
        title: 'How do you use React',
        content: 'You use React by creating components and connecting them.'
    },
]

const dropDownOptions = [
    {
        label: 'Red',
        value: 'red',
    },
    {
        label: 'Blue',
        value: 'blue',
    },
    {
        label: 'Green',
        value: 'green',
    },
    {
        label: 'Black',
        value: 'black',
    },
    {
        label: 'White',
        value: 'white',
    },
]


const App = () => {
    const [selected, setSelected] = useState(null);
    const [currentUrl, setCurrentUrl] = useState('/');

    return (
        <div className="ui container">
            <Header setCurrentUrl={setCurrentUrl}/>
            <Route currentUrl={currentUrl} path='/'>
                <Accordion items={items}/>
            </Route>
            <Route currentUrl={currentUrl} path='/dropdown'>
                <Dropdown options={dropDownOptions} labelText="Select a Color" selected={selected} onSelectedChange={setSelected}/>
            </Route>
            <Route currentUrl={currentUrl} path='/list'>
                <Search/>
            </Route>
            <Route currentUrl={currentUrl} path='/translate'>
                <Translate/>
            </Route>
        </div>
    );
}

export default App;