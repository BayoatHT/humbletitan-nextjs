import React, { useEffect, useRef, useState } from "react";
import { FaPlus, FaMinus } from 'react-icons/fa'

function Accordion(props) {
    const [active, setActive] = useState(false);
    const content = useRef(null);
    const [height, setHeight] = useState("0px");
    useEffect(() => {
        console.log("Height for ", props.title, ": ", height);
    }, [height, props.title]);

    function toggleAccordion() {
        setActive(!active);
        setHeight(active ? "0px" : `${content.current.scrollHeight}px`);
    }

    return (
        <div className="flex flex-col ">
            <div
                className={`accordion ${active ? "accordionActive" : ""}`}
                onClick={toggleAccordion}
            >
                <span>{active ? <FaMinus className='translate-y-2 text-[30px] mr-[12px]' color='#f86011' /> : <FaPlus className='translate-y-2 text-[30px] mr-[12px]' color='#f86011' />}</span>
                <p className="text-[30px] font-bold flex py-4 ">{props.title}</p>
            </div>
            <div
                ref={content}
                style={{ maxHeight: `${height}` }}
                className="accordion__content"
            >
                <div
                    className="text-[22px] text-[#59667d] font-normal text-left "
                    dangerouslySetInnerHTML={{ __html: props.content }}
                />
            </div>
        </div>
    );
}

export default Accordion;
