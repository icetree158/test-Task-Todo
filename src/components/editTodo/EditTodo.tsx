import { useState, FC, useEffect } from 'react'
import { useAppDispatch } from '../../hooks/redux'
import { ITodo } from '../../model/ITodo'
import { editTodoByIndex } from '../../store/todosSlice'
import CustomBtn from '../../UI/btn/CustomBtn'
import CustomInput from '../../UI/input/CustomInput'
import TextEditor from '../../UI/textArea/textEditor/TextEditor'
import Modal from '../modal/Modal'

interface PropsEditTodo {
    setmodal: (el: boolean) => void;
    activeCard: ITodo;
    modal: boolean;
   

}

const EditTodo: FC<PropsEditTodo> = ({ modal, setmodal, activeCard }) => {
    const [nameActive, setnameActive] = useState('')
    const [descriptionActive, setdescriptionActive] = useState('')
    const [oldName, setOldName] = useState('')
    const [oldDescription, setOldDescription] = useState('')
    const [error, seterror] = useState("")
    const dispatch = useAppDispatch()

    useEffect(() => {
        setnameActive(activeCard.name)
        setOldName(activeCard.name)

        setdescriptionActive(activeCard.description)
        setOldDescription(activeCard.description)

    }, [activeCard])
    const aplyEdit = () => {

        if (nameActive && descriptionActive) {
            dispatch(editTodoByIndex({
                todoEdit: {
                    name: nameActive,
                    description: descriptionActive
                },
                todoPrev: {
                    name: oldName,
                    description: oldDescription
                }
            }))
            seterror('')
            setmodal(false)
        }
        else {
            seterror('Empty name or description')
        }
    }

    return (
        <Modal modal={modal} setModal={setmodal}>
            <CustomInput setvalue={setnameActive} value={nameActive} label='Name' />

            <TextEditor text={descriptionActive} setText={setdescriptionActive} />
            <div className='wrapperBtn'>
                <div className='errorMessage'>{error}</div>
                <CustomBtn click={aplyEdit} >Aply</CustomBtn>
            </div>
        </Modal>
    )
}

export default EditTodo