import React from 'react';
import {useState, useEffect} from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const languageOptions = [
    {
        label: 'Afrikaans',
        value: 'af',
    },
    {
        label: 'Arabic',
        value: 'ar',
    },
    {
        label: 'Hindi',
        value: 'hi',
    },
]

const Translate = () => {
    const [language, setLanguage] = useState(languageOptions[0].label);
    const [msgToTranslate, setMsgToTranslate] = useState('Hello!')
    const languageCode = languageOptions.map(option => {
        if (option.label === language) return option.value;
        return null;
    }).filter(item => item !== null)[0];
    console.log('languageCode =', languageCode);
    return (
        <div className="ui">
            <br/>
            <div className="ui form">
                <div className="field">
                    <label htmlFor="msgToTranslate">Message to Translate: </label>
                    <textarea 
                        id="msgToTranslate"
                        type="text"
                        className="ui input segment" 
                        placeholder="Type message to translate"
                        value={msgToTranslate}
                        onChange={e => setMsgToTranslate(e.target.value)}
                    />
                </div>
            </div>
            <br/>
            <Dropdown 
                options={languageOptions}
                labelText="Select a target language:"
                selected={language}
                onSelectedChange={setLanguage}
            />
            <br/>
            <Convert source={msgToTranslate} target={languageCode}/>
        </div>
    );  
}

export default Translate;