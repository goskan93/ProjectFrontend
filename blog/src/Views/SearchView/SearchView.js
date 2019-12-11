import React, {useState, useEffect, Suspense, lazy} from "react";
import Grid from "@material-ui/core/Grid";
import SearchFields from './SearchFields'
import { ApiUrlsDict, sendWebRequest } from "../../Utils/WebAPI";
import CustomButton from "../../Components/CustomButton";

const SearchBlogListResults = lazy(() => import('./SearchBlogListResults'));

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
      <Grid item xs={12}>
        <Grid container direction="row" justify="center" alignItems="center" spacing={1}>
          <Grid item md={3}/>
          <Grid item xs={12} md={6}>
            <SearchFields onChangeInput={onChangeInput} values={filters}/>
          </Grid>
          <Grid item md={3}/>
          <Grid item xs={12}>
            <CustomButton variant="contained" onClick={onClickSearch}>Search</CustomButton>            
          </Grid>
          <Grid item md={3}/>
        </Grid>
        {listBlogs.length > 0 &&
          <Suspense fallback={<div>Loading...</div>}>
            <SearchBlogListResults listBlogs={listBlogs}/>
          </Suspense>
        }
      </Grid>
    </Grid>
  );
}
export default SearchView;

const state = {
  Languages: [],
  Countries: [],
}