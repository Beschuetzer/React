import React from 'react';
import Link from './Link';

const Header = () => {
    const isAccordionActive = window.location.pathname === '/' ? 'active' : '';
    const isSearchActive = window.location.pathname === '/list' ? 'active' : '';
    const isDropdownActive = window.location.pathname === '/dropdown' ? 'active' : '';
    const isTranslateActive = window.location.pathname === '/translate' ? 'active' : '';

    return (
        <div className="ui secondary pointing menu">
            <Link href="/" className={`item ${isAccordionActive}`}>Accordion</Link>
            <Link href="/list" className={`item ${isSearchActive}`}>Search</Link>
            <Link href="/dropdown" className={`item ${isDropdownActive}`}>Dropdown</Link>
            <Link href="/translate" className={`item ${isTranslateActive}`}>Translate</Link>
        </div>
    );
}

export default Header;