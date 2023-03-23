import { useState } from 'react'
import { useAppDispatch } from '../../hooks/redux'
import CustomBtn from '../../UI/btn/CustomBtn'
import CustomInput from '../../UI/input/CustomInput'
import { addNewTodo } from '../../store/todosSlice'
import CustomTextArea from '../../UI/textArea/CustomTextArea'

const AddTodo = () => {
    const [name, setname] = useState<string>('')
    const [error, seterror] = useState<string>('')
    const [description, setdescription] = useState<string>('')
    const [tags, setTags] = useState<string[]>([]);
    const dispatch = useAppDispatch();
    const addNote = () => {
        if (name.length > 1 && description.length > 0) {
            seterror("")
            setname("")
            setdescription("")
            setTags([])
            dispatch(addNewTodo({ name, description }))
        }
        else { seterror("Empty name or description") }

    }

    return (
        <>
            <CustomInput label='Name' setvalue={setname} value={name} />
            <CustomTextArea label='Description'
                value={description}
                setvalue={setdescription}
                tags={tags}
                setTags={setTags} />
            <div className='wrapperBtn'>
                <div className='errorMessage'>{error}</div>
                <CustomBtn click={() => addNote()} >Add the note</CustomBtn>
            </div>
        </>
    )
}

export default AddTodo