import React, {useState, useEffect} from "react";
import { blogFormInputs } from "../../Utils/blogForm"; 
import { getList } from "../../Utils/utils";
import { SelectInput, CheckBoxInput} from "../../Components";

function SearchFields(props) {
  const {onChangeInput, values} = props
  const [viewReady, onChangeViewReady] = useState(false)
  const [list, onUpdateList] = useState(state)
  const selectInputs = blogFormInputs.filter(x => x.inputType === "SelectInput");

  useEffect(() => {
    const fetchLists = () => {
      let updatedList = list
      if (selectInputs) {
        selectInputs.forEach(async item => {
          let listData = await getList(item.apiUrlName);
          updatedList[item.apiUrlName] = listData
        });
        onUpdateList(updatedList);
      }          
    }
    fetchLists()
    setTimeout(() => onChangeViewReady(true), 300)
  },[]);

  return (
    <>
    {viewReady &&
      <>
        <SelectInput
          options={list.LanguagesList}   
          value={values.Languages}
          onChange={onChangeInput('Languages')}
        />
        <SelectInput
          options={list.CountriesList}   
          value={values.Countries}
          onChange={onChangeInput('Countries')}
        />
      </>
    }
    </>
  );
}
export default SearchFields;

const state = {
  LanguagesList: [],
  CountriesList: [],
}
