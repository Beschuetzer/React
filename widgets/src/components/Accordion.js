import React, {useState} from 'react';

const Accordion = ({items}) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (index) => {
        setActiveIndex(index);
    }


    const itemsRendered = items.map((item,index) => {
        return (
            <React.Fragment key={item.title}>
                <div 
                    className="title" 
                    onClick={() => onTitleClick(index)}
                >
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className="content">
                    <p>
                        {item.content}
                    </p>
                </div>
            </React.Fragment>
        );
    });

    return (
        <div className="ui styled accordion">
            {itemsRendered}
            <h4>{activeIndex}</h4>
        </div>
    );
}

export default Accordion;