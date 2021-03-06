import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';

import './style.css';

const Search = () => {
    const startQuery = 'supercalifragilisticexpialidocious';
    const [term, setTerm] = useState(startQuery);
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [results, setResults] = useState([]);
    const debounceTimeout = 1000;


    //instructor's approach

    //this useEffect updates the debouncedTerm 1000 ms after term changes and the user is done typing (cancels the update if the user types before 1000ms has elapsed)
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDebouncedTerm(term);
        }, debounceTimeout);

        return (() => {
            clearTimeout(timeoutId);
        })
    }, [term]);

    useEffect(() => {
        if (debouncedTerm !== '') {
            const search = async () => {
                const response = await axios.get('https://en.wikipedia.org/w/api.php', {
                    params: {
                        srsearch: debouncedTerm,
                        action: 'query',
                        list: 'search',
                        format: 'json',
                        origin: '*'
                    }
                });
                setResults(response.data.query.search);
            }
            search();
        }
    }, [debouncedTerm]);

    //my approach
    // useEffect(() => {
    //     if (term !== '')  {
    //         const timeout = term === startQuery ? 0 : 1000;
    //         const searchTimeout = setTimeout(() => {
    //             axios.get('https://en.wikipedia.org/w/api.php', {
    //                 params: {
    //                     srsearch: term,
    //                     action: 'query',
    //                     list: 'search',
    //                     format: 'json',
    //                     origin: '*'
    //                 }
    //             }).then((response) => {
    //                 setResults(response.data.query.search);
    //             });
    //         }, timeout);

    //         return () => {
    //             clearTimeout(searchTimeout);
    //         }
    //     }
    // }, [term]);

    const getResultsRendered = () => {
        return results.map((result, index) => {
            return (
                <div key={result.pageid} className="ui segment result">
                    <div className="content">
                        <h4 className="header">
                            {result.title}
                        </h4>
                        <span dangerouslySetInnerHTML={{__html: `${result.snippet}...`}}></span>
                    </div>
                    <a target="_blank" rel='noreferrer' href={`http://en.wikipedia.org?curid=${result.pageid}`} className="ui button">Go</a>
                </div>
            );
        });
    }

    return (
        <React.Fragment>
            <div className="ui segment">
                <form onSubmit={e => e.preventDefault()} className="ui form">
                    <div className="field">
                        <label htmlFor="search">Search:</label>
                        <input 
                            id="search"
                            value={term}
                            onChange={e => setTerm(e.target.value)} 
                            className='input'
                            onFocus={e => e.target.value = ''}
                        />
                    </div>
                </form>
            </div>
            <div className="">
                {results.length >=1 ? getResultsRendered() : null}
            </div>
        </React.Fragment>
    );

}

export default Search;