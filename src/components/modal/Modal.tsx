import { ReactNode, FC } from 'react'
import './Modal.scss'
interface PropsModal {
    modal: boolean;
    setModal: (modal: boolean) => void;
    children: ReactNode;
}

const Modal: FC<PropsModal> = ({ modal, setModal, children }) => {

    const closeBtn = () => {
        setModal(!modal)
    }
    return (
        <div className={modal ? "modalContainer active" : "modalContainer"}>
            <div className='modalWrapper'>
                <div className='modalContent'>
                    {children}
                    <button className='closeBtn' onClick={closeBtn}>X</button>
                </div>
            </div>
        </div>
    )
}

export default Modal