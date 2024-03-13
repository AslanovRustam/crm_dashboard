import { type FC, ChangeEvent } from "react";
import SearchIco from "../../../public/search.svg";
import s from "./search.module.css";
import { useAppDispatch } from "@/app/lib/hooks";
import { setFilter } from "@/app/lib/filterSlice";

interface SearchProps {}

const Search: FC<SearchProps> = () => {
  const dispatch = useAppDispatch();
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    dispatch(setFilter(value));
  };

  return (
    <form className={s.form}>
      <label className={s.label}>
        <input
          className={s.input}
          placeholder="Search..."
          onChange={handleInputChange}
        />
      </label>

      <SearchIco className={s.icon} />
    </form>
  );
};

export default Search;
