import styles from "./SearchBar.module.scss";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useState, useContext } from "react";
import StoreContext from "../../context/storeContext";

const SearchBar = () => {
  const searchCtx = useContext(StoreContext);
  const [searchTerm, setSearchTerm] = useState("");

  const onSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const onSearchSumbit = (e) => {
    e.preventDefault();
    searchCtx.setItems({ type: "search", value: searchTerm });
  };
  return (
    <div>
      <form className={styles.serchForm}>
        <label htmlFor="">Search</label>
        <input
          type="text"
          placeholder="Search"
          name="search"
          onChange={onSearchChange}
          value={searchTerm}
        />
        <button onClick={onSearchSumbit}>
          <SearchRoundedIcon />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
