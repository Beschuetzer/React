import React from 'react';
import {useState, useEffect, useRef} from 'react';

const Dropdown = (({options, labelText, selected, onSelectedChange}) => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef();
    console.log('isOpen =', isOpen);
    console.log('options =', options);
    console.log('labelText =', labelText);
    console.log('variable =', selected);
    console.log('setter =', onSelectedChange);

    //setup a body event listner on first render
    useEffect(() => {
        document.body.addEventListener('click', handleBodyClick)
    }, []);

    const handleBodyClick = (e) => {
        console.log('e.target =', e.target);
        if (ref.current && ref.current.contains(e.target)) {
            console.log('returning------------------------------------------------');
            // setIsOpen(true);
            return
        }
        setIsOpen(false);
    }

    // useEffect(() => {
    //     const onBodyClick = (event) => {
    //      if (ref.current && ref.current.contains(event.target)) {
    //         return;
    //       }
     
    //       setOpen(false);
    //     };
     
    //     document.body.addEventListener('click', onBodyClick);
     
    //     return () => {
    //       document.body.removeEventListener('click', onBodyClick);
    //     };
    //   }, []);

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
                <div ref={ref} onClick={() => setIsOpen(!isOpen)} className={`ui selection dropdown ${isOpen ? 'visible active' : ''}`}>
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