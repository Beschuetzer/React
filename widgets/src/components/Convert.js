import axios from 'axios';
import React from 'react';
import {useState, useEffect} from 'react';

const googleTranslateApiKey = "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM"


const Convert = ({source, target}) => {
    const [debouncedSource, setDebouncedSource] = useState(source);
    const [debouncedTarget, setDebouncedTarget] = useState(target);
    console.log('source =', source);
    console.log('target =', target);

    useEffect(() => {
        const timeoutIdSource = setTimeout(() => {
            setDebouncedSource(source);
        }, 1000);
        const timeoutIdTarget = setTimeout(() => {
            setDebouncedTarget(target);
        }, 1000);

        return (() => {
            clearTimeout(timeoutIdSource);
            clearTimeout(timeoutIdTarget);
        });
    }, [source, target]);

    useEffect(() => {
        if (debouncedSource && debouncedTarget) {
            // axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
            //     params: {
            //         q: source,
            //         target,
            //         key: googleTranslateApiKey,
            //     }
            // })            
        }
        else return;
    }, [debouncedSource, debouncedTarget])

    return (
        <div className="ui form">
            <div className="field ">
                <label htmlFor="translationText">Translation:</label>
                <textarea defaultValue="Translation Here" id="translationText" className="ui input segment"/>
            </div>
        </div>
    );
}

export default Convert;