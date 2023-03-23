import { FC } from 'react'
import CustomInput from '../../UI/input/CustomInput'
import './SearchPanel.scss'
interface PropsSearchPanel {
    search: string
    setSearch: (el: string) => void
}

const SearchPanel: FC<PropsSearchPanel> = ({ search, setSearch }) => {

    return (
        <div className='searchPanel'>
            <CustomInput setvalue={setSearch} value={search} placeholder="example #shop" />
        </div>
    )
}

export default SearchPanel