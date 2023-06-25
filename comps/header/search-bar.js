import s from "../../styles/header/search-bar.module.scss";

const SearchBar = () => {
  return (
    <div className={s["header-body"]}>
      <form className={s["search-bar"]} action="" method="">
        <input
          type="search"
          name="search"
          placeholder="Знайти товар..."
        ></input>
        <button type="submit">
          <img src="/search.svg"></img>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
