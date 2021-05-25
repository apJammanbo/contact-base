const SearchBox = ({ value, onChangeSearchText }) => {
  return (
    <div className="search-box">
      <input
        value={value}
        type="text"
        className="inp-sch"
        placeholder="검색어를 입력하세요."
        onChange={(event) => onChangeSearchText(event.target.value)}
      />
    </div>
  );
};

export default SearchBox;
