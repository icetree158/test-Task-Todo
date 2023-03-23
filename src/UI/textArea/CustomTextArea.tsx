import React from 'react';
import './CustomTextArea.scss'
interface PropsCustomTextArea {
    setvalue: (targer: string) => void;
    value: string;
    label?: string;
    tags: string[];
    setTags: (e: string[]) => void
}
const CustomTextArea: React.FC<PropsCustomTextArea> = ({ label, value, setvalue, tags, setTags }) => {



    const handleInputChange = (event: string) => {
        const newTags = value.split(' ').filter((word) => word.startsWith('#'));
        setTags(newTags);
    };

    return (
        <div className='textareaWrapper'>
            <div className='labelForInp '>{label}</div>
            <textarea className='textarea' value={value} onChange={(e) => { setvalue(e.target.value); handleInputChange(value) }} />
            <div className='tagsWrapper'>
                {tags.map((tag, index) => (
                    <>
                        <span className='tagsSpan' key={index}>{tag+" "}</span>
                     
                    </>
                ))}
            </div>
        </div >
    );
};

export default CustomTextArea;