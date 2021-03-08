import axios from 'axios';
import React from 'react';
import {useState, useEffect} from 'react';

const googleTranslateApiKey = "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM"


const Convert = ({source, target}) => {
    const [debouncedSource, setDebouncedSource] = useState(source);
    const [debouncedTarget, setDebouncedTarget] = useState(target);
    const [translatedText, setTranslatedText] = useState("");
    console.log('translatedText =', translatedText);

    useEffect(() => {
        const timeoutIdSource = setTimeout(() => {
            setDebouncedSource(source);
        }, 750);
        const timeoutIdTarget = setTimeout(() => {
            setDebouncedTarget(target);
        }, 750);

        return (() => {
            clearTimeout(timeoutIdSource);
            clearTimeout(timeoutIdTarget);
        });
    }, [source, target]);

    useEffect(() => {
        if (debouncedSource && debouncedTarget) {
            axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                params: {
                    q: debouncedSource,
                    target: debouncedTarget,
                    key: googleTranslateApiKey,
                }
            }).then((response) => {
               console.log('response =', response); 
               setTranslatedText(response.data.data.translations[0].translatedText)
            })            
        }
        else return;
    }, [debouncedSource, debouncedTarget])

    return (
        <div className="ui form">
            <div className="field ">
                <label htmlFor="translationText">Translation:</label>
                <textarea 
                    defaultValue={translatedText} 
                    id="translationText" 
                    className="ui input segment"
                />
            </div>
        </div>
    );
}

export default Convert;