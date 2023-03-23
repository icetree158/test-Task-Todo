import React, { FC } from 'react'
import './CustomBtn.scss'
interface PropsCustomBtn {
    props?: any;
    children: string;
    click?: () => void

}

const CustomBtn: FC<PropsCustomBtn> = ({ props, children, click }) => {
    return (
        <button {...props} onClick={click} className='CustomBtn'>{children}</button>
    )
}

export default CustomBtn