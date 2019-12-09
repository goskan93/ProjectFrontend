import React from "react";
import Grid from "@material-ui/core/Grid";
import BlogCard from "../../Components/BlogCard";

function SearchBlogListResults(props) {
  const {listBlogs} = props
  return (
    <Grid container direction="row" justify="center" alignItems="center" spacing={2}>
      {listBlogs.map((blog, id) => {
        return (
          <Grid key={id} item xs={12} md={8}>
            <BlogCard blog={blog}/>
          </Grid>
        )
      })}
    </Grid>        
  );
}
export default SearchBlogListResults;

