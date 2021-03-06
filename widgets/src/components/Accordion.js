import React from 'react';

const Accordion = ({items}) => {
    const itemsRendered = items.map(item => {
        return (
            <React.Fragment key={item.title}>
                <div class="title active">
                    <i class="dropdown icon"></i>
                    {item.title}
                </div>
                <div class="content active">
                    <p>
                        {item.content}
                    </p>
                </div>
            </React.Fragment>
        );
    });

    return (
        <div class="ui styled accordion">
            {itemsRendered}
        </div>
    );
}

export default Accordion;