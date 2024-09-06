import Styles from './SearchBox.module.css';
import { ImSearch } from 'react-icons/im';
import { createQueryObject } from '../Help/Helper';

function SearchBox  ({search, setSearch, setQuery})  {
    const searchHandler = () => {
        setQuery((query) => createQueryObject(query, { search }));


    };
    return (
        <div className={Styles.mysearch}>
            <input type="text" placeholder='Search ....' value={search} onChange={e => setSearch(e.target.value.toLowerCase().trim())} />
            <button onClick={searchHandler}><ImSearch fontSize={"1.5rem"} style={{ padding: "3px" }} /></button>
        </div>
    );
}

export default SearchBox;
