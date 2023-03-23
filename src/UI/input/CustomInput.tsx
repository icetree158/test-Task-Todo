import React, { FC } from 'react';
import './CustomInput.scss';
interface PropsCustomInputDef {
    setvalue: (targer: string) => void;
    value: string | undefined;
    label?: string;
    placeholder?: string
}

const CustomInput: FC<PropsCustomInputDef> = ({ placeholder, setvalue, value, label }) => {
    return (
        <div>
            <span className='labelForInp '>{label}</span>
            <input placeholder={placeholder} onChange={(e) => setvalue(e.currentTarget.value)} value={value} type="text" className='addTodoInp' />
        </div>


    )
}

export default CustomInput