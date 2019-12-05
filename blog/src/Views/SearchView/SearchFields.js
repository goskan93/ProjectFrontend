import React, {useState, useEffect} from "react";
import { blogFormInputs } from "./blogForm"; 
import { getList } from "../../Utils/utils";
import { SelectInput, CheckBoxInput} from "../../Components";

function SearchFields(props) {
  const {onChangeInput} = props
  const [list, onUpdateList] = useState(state)
  const selectInputs = blogFormInputs.filter(x => x.inputType === "SelectInput");

  useEffect(() => {
    const fetchLists = () => {
      if (selectInputs) {
        selectInputs.forEach(async item => {
          let listData = await getList(item.apiUrlName);
          onUpdateList({...list, [item.apiUrlName]: listData});
        });
      }          
    }
    fetchLists()
  },[]);

  return (
    <>
      <SelectInput
        options={list.LanguagesList}   
        onChange={onChangeInput('Languages')}
        {...input.otherProps}
      />
      <SelectInput
        options={input.options}   
        onChange={onChangeInput('Countries')}
        {...input.otherProps}
      />
    </>
  );
}
export default SearchFields;

const state = {
  LanguagesList: [],
  CountriesList: [],
}
