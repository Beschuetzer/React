import axios from 'axios';
import React from 'react';
import {useState, useEffect} from 'react';

const googleTranslateApiKey = "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM"


const Convert = ({source, target}) => {
    const [debouncedSource, setDebouncedSource] = useState(source);
    const [translatedText, setTranslatedText] = useState("");
    console.log('translatedText =', translatedText);

    useEffect(() => {
        const timeoutIdSource = setTimeout(() => {
            setDebouncedSource(source);
        }, 750);

        return (() => {
            clearTimeout(timeoutIdSource);
        });
    }, [source]);

    useEffect(() => {
        if (debouncedSource && debouncedSource !== '') {
            axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                params: {
                    q: debouncedSource,
                    target: target,
                    key: googleTranslateApiKey,
                }
            }).then((response) => {
               setTranslatedText(response.data.data.translations[0].translatedText);
            });       
        }
        else return;
    }, [debouncedSource, target])

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