import React from 'react';
import {useState, useEffect, useRef} from 'react';

const Dropdown = (({options, labelText, selected, onSelectedChange}) => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef();
    let trimmedLabelText = labelText.trim();
    if (trimmedLabelText[trimmedLabelText.length - 1] !== ':') trimmedLabelText += ':';
    //setup a body event listner on first render
    useEffect(() => {
        document.body.addEventListener('click', handleBodyClick)
    }, []);

    const handleBodyClick = (e) => {
        if (ref.current && ref.current.contains(e.target)) {
            return
        }
        setIsOpen(false);
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
                <label className="label">{trimmedLabelText}</label>
                <div ref={ref} onClick={() => setIsOpen(!isOpen)} className={`ui selection dropdown ${isOpen ? 'visible active' : ''}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selected ? selected : trimmedLabelText}</div>
                    <div className={`menu ${isOpen ? 'visible transition' : ''}`}>
                        {optionsRendered}
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Dropdown;