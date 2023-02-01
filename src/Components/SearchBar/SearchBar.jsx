import styles from "./SearchBar.module.scss";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useState } from "react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const onSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const onSearchSumbit = () => {};
  return (
    <div>
      <div className={styles.serchForm}>
        <label htmlFor="">Search</label>
        <input type="text" placeholder="Search" onChange={onSearchChange} />
        <button onClick={onSearchSumbit}>
          <SearchRoundedIcon />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
