import React, { useState, FormEvent } from "react";
import './TextEditor.scss'
interface PropsTextEditor {
    text: string;
    setText: (text: string) => void;
}

const TextEditor: React.FC<PropsTextEditor> = ({ text, setText }) => {
    const [isEditing, setIsEditing] = useState(false);

    const handleFocus = () => {
        setIsEditing(true);
    }

    const handleBlur = (e: FormEvent<HTMLDivElement>) => {
        setIsEditing(false);
        
        if (e.currentTarget.textContent?.length) {
            setText(e.currentTarget.textContent)
        } else setText('')
    }


    return (
        <div className="textAreaEditorWrapper">
            <span className="labelForInp">Desctiption</span>
            <div
                className="textAreaEditor"
                contentEditable
                suppressContentEditableWarning
                onFocus={handleFocus}
                onBlur={handleBlur}

                dangerouslySetInnerHTML={{ __html: isEditing ? text : text.replaceAll(/#[\wа-яё]+/gi, '<span class="tagSpanTextareat">$&</span>') }}
            />
        </div>
    );
};


export default TextEditor;