import type { Dispatch, FC, SetStateAction } from "react";
import SearchIco from "../../../public/search.svg";
import s from "./search.module.css";

interface SearchProps {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
}

const Search: FC<SearchProps> = ({ searchValue, setSearchValue }) => {
  return (
    <form className={s.form}>
      <label className={s.label}>
        <input
          className={s.input}
          placeholder="Search..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </label>

      <SearchIco className={s.icon} />
    </form>
  );
};

export default Search;
