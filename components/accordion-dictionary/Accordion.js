import React, { useEffect, useRef, useState } from "react";
import { FaPlus, FaMinus } from 'react-icons/fa'
import Link from 'next/link'
import ReactMarkdown from "react-markdown";

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
                className={`accordion ${active ? "accordionActive" : ""} `}
                onClick={toggleAccordion}
            >
                <span>{active ? <FaMinus className=' text-[30px] mr-[12px]' color='#023A51' /> : <FaPlus className=' text-[30px] mr-[12px]' color='#023A51' />}</span>
                <p className="text-[30px] font-bold flex py-4 ">{props.title}</p>
            </div>
            <div
                ref={content}
                style={{ maxHeight: `${height}` }}
                className="accordion__content"
            >
                <ReactMarkdown components={{
                    h1: ({ node, ...props }) => <h1 className="text-[42px]" {...props} />,
                    h2: ({ node, ...props }) => <h2 className="text-[36px]" {...props} />,
                    h3: ({ node, ...props }) => <h3 className="text-[30px]" {...props} />,
                    h4: ({ node, ...props }) => <h4 className="text-[26px]" {...props} />,
                    h5: ({ node, ...props }) => <h5 className="text-[20px]" {...props} />,
                    h6: ({ node, ...props }) => <h6 className="text-[18px]" {...props} />,
                    p: ({ node, ...props }) => <p className="text-[22px] text-[#59667d] font-normal text-left mb-6" {...props} />,
                    a: ({ node, ...props }) => <a className="hover:text-[#2cbc63] text-[#023A51] mb-6" target="_blank" {...props} />,
                }} >
                    {props.content}
                </ReactMarkdown>
                {/* <div
                    className="text-[22px] text-[#59667d] font-normal text-left "
                    dangerouslySetInnerHTML={{ __html: props.content }}
                /> */}
            </div>
        </div>
    );
}

export default Accordion;
