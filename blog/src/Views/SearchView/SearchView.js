import React, {useState, useEffect} from "react";
import SearchFields from './SearchFields'

function SearchView(props) {
  const [filters, onUpdateFilters] = useState(state)

  const onChangeInput = fieldName => value => {
    onUpdateFilters({ ...filters, [fieldName]: value.map((item,_) => item.value) });
  };

  return (
    <>
      <SearchFields onChangeInput={onChangeInput}/>
    </>
  );
}
export default SearchView;

const state = {
  Languages: [],
  Countries: [],
}