import style from './SearchBar.module.css';
import { SearchBarProps } from './SearchBar.types';

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onSearch(e.target.value);
    };

    return (
        <header className={style.searchbar}>
            <h1 className={style.headline}>Your Favorite Task List 📋</h1>

            <input
                className={style.searchbar_input}
                type='text'
                placeholder='Search'
                onChange={onChange}
            />
        </header>
    );
};
