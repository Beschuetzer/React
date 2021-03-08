import React from 'react';

const Header = () => {
    const isAccordionActive = window.location.pathname === '/' ? 'active' : '';
    const isSearchActive = window.location.pathname === '/list' ? 'active' : '';
    const isDropdownActive = window.location.pathname === '/dropdown' ? 'active' : '';
    const isTranslateActive = window.location.pathname === '/translate' ? 'active' : '';

    return (
        <div className="ui secondary pointing menu">
            <a href="/" className={`item ${isAccordionActive}`}>Accordion</a>
            <a href="/list" className={`item ${isSearchActive}`}>Search</a>
            <a href="/dropdown" className={`item ${isDropdownActive}`}>Dropdown</a>
            <a href="/translate" className={`item ${isTranslateActive}`}>Translate</a>
        </div>
    );
}

export default Header;