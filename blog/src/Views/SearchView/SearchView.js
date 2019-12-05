import React, {useState, useEffect} from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import SearchFields from './SearchFields'
import { ApiUrlsDict, sendWebRequest } from "../../Utils/WebAPI";

function SearchView(props) {
  const [filters, onUpdateFilters] = useState(state)
  const [listBlogs, onUpdateListBlogs] = useState([])

  const onChangeInput = fieldName => value => {
    onUpdateFilters({ ...filters, [fieldName]: value});
  };

  const createFilterUrlString = () => {
    let filter = "?"
    filters.Countries.forEach(item => {
      filter += `Countries=${item.value}&`
    })
    filters.Languages.forEach(item => {
      filter += `Languages=${item.value}&`
    })
    filter = filter.slice(0, -1)
    return filter
  }

  const onClickSearch = async () => {
    const filterUrl = createFilterUrlString()
    var response = await sendWebRequest(`${ApiUrlsDict.GetBlogList}${filterUrl}`, "GET", "");
    if(response.Message == "OK"){
      onUpdateListBlogs(response.result)
    }else{
      //TODO: Info o screen that nothing found and change the criteria
    }
  }

  return (
    <Grid container direction="row" justify="center" alignItems="center" spacing={2}>
      <Grid item md={3} />
      <Grid item xs={12} md={6}>
        <SearchFields onChangeInput={onChangeInput} values={filters}/>
        <Button variant="contained" onClick={onClickSearch}>
          Search
        </Button>
      </Grid>
      <Grid item md={3} />
    </Grid>
  );
}
export default SearchView;

const state = {
  Languages: [],
  Countries: [],
}