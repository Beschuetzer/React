import React from 'react';
import {useState, useEffect} from 'react';

const Dropdown = (({options, labelText, selected, onSelectedChange}) => {
    const [isOpen, setIsOpen] = useState(false);
    console.log('isOpen =', isOpen);
    console.log('options =', options);
    console.log('labelText =', labelText);
    console.log('variable =', selected);
    console.log('setter =', onSelectedChange);


    useEffect(() => {
        document.body.addEventListener('click', handleBodyClick)
    }, []);

    const handleBodyClick = (e) => {
        setIsOpen(true);
    }

    const optionsRendered = options.map(option => {
        if (option.label === selected) return null;
        return (
            <option onClick={() => onSelectedChange(option.label)} key={option.value} value={option.value} className="item">{option.label}</option>
        );
    });

    return (
        <div className="ui form">
            <div className="field">
                <label className="label">{labelText}</label>
                <div onClick={() => setIsOpen(!isOpen)} className={`ui selection dropdown ${isOpen ? 'visible active' : ''}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selected ? selected : labelText}</div>
                    <div className={`menu ${isOpen ? 'visible transition' : ''}`}>
                        {optionsRendered}
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Dropdown;